import React, {useState, useMemo, useCallback} from 'react';

import Main from 'page/Main';
import Entry from 'page/entry';
import Header from 'page/header';

import 'assets/base.scss';
import './app.scss';
import { reportData } from './api'
import { useEffect } from 'react';


 function sortFrame(pagedFrames, data) {
    if(!Array.isArray(pagedFrames)) {
        Object.keys(pagedFrames).map(pageId => {
            const pageNode =  data.document.children.find(({id}) => id === pageId)
            if(pageNode){
                const frames:{id: string, name:string, x: number, y: number}[] = pagedFrames[pageId].frames
                frames.forEach(frame =>{
                    const canvasData = pageNode.children.find(({id}) => id === frame.id)
                    console.log('find frame info', canvasData.name, canvasData)
                    frame.x = canvasData.absoluteBoundingBox.x
                    frame.y = canvasData.absoluteBoundingBox.y
                })

                frames.sort((a, b) =>{
                    if(a.y == b.y) {
                        return a.x < b.x ? -1:  1
                    } else {
                        return a.y < b.y ? -1:  1
                    }
                })
            }
           
        })
    }

    return pagedFrames
 }

const App = (props: any) => {
    const {FILE_DATA, PAGED_FRAMES, SETTINGS} = window
    const mode = FILE_DATA ? 'local' : 'online'
    
    const {
        links,
        isModule,
        fileData,
        versionData,
        onHeaderBack,
        settings: settingsOfProps,
        pagedFrames: pagedFramesOfProps,
        exportSettings: exportSettingsOfProps,
    } = props;

    const isMock = !isModule
    const initData = FILE_DATA || fileData || {};
    const settings = SETTINGS || settingsOfProps || {};
    const initPagedFrames = PAGED_FRAMES || pagedFramesOfProps || {};
    const sortedFrame =  useMemo(() =>{
       return sortFrame(initPagedFrames, initData)
    }, [initPagedFrames, initData])



    const [names, setNames] = useState({})
    const [data, setData] = useState(initData);
    const [styles, setStyles] = useState(initData.styles || {});
    const [pagedFrames, setPagedFrames] = useState(sortedFrame);
    const [components, setComponents] = useState(initData.components || []);
    const [exportSettings, setExportSettings] = useState(initData.exportSettings || exportSettingsOfProps || []);
    const [includeComponents, setIncludeComponents] = useState(mode !== 'local' && isMock ? true : !!settings.includeComponents)
    
    const [backFromDemo, setBackFromDemo] = useState(true)
    const [entryVisible, setEntryVisible] = useState(mode === 'local' ? false : isMock)

    useEffect(() =>{
        reportData(settings.handOffUser || '', settings.curPageName || '')
    }, [settings])
    
    const handleDataGot = useCallback((fileData: any, components: any, styles: any, exportSettings: any, pagedFrames: any) => {
        setEntryVisible(false);
        
        console.log('pagedFrames', pagedFrames)
        console.log('fileData', fileData)
        sortFrame(pagedFrames, fileData)

        setData(fileData);
        setStyles(styles);
        setPagedFrames(sortFrame(pagedFrames, fileData));

        setComponents(components);
        setExportSettings(exportSettings);
    }, []);

    const handleComponentsOptionChange = useCallback((includeComponents: any) => {
        setIncludeComponents(includeComponents);
    }, []);

    const handleBack = useCallback(() => {
        if (onHeaderBack) {
            onHeaderBack();
        } else {
            setNames({});
            setEntryVisible(true);
            setBackFromDemo(true);
        }
    }, [onHeaderBack]);

    const getNames = useCallback((frameName: string, pageName: string) => {
        setNames({
            documentName: data.name,
            pageName: pageName || data.document.children[0].name,
            frameName: frameName || data.document.children[0].children[0].name,
            isComponent: !pageName,
        });
    }, [data]);

    const genCon = useMemo(() => {
        return entryVisible 
            ? (
                <Entry
                    onDataGot={handleDataGot}
                    backFromDemo={backFromDemo}
                    onComponentsOptionChange={handleComponentsOptionChange}
                />
            )
            : (
                <Main
                    mode={mode}
                    isMock={isMock}
                    includeComponents={includeComponents}
                    data={data}
                    components={components}
                    styles={styles}
                    exportSettings={exportSettings}
                    pagedFrames={pagedFrames}
                    onNamesChange={getNames}
                    versionData={versionData}
                    {...names}
                />
            )
    }, [
        names,
        mode,
        data,
        styles,
        isMock,
        versionData,
        getNames,
        components,
        pagedFrames,
        entryVisible,
        backFromDemo,
        handleDataGot,
        exportSettings,
        includeComponents,
        handleComponentsOptionChange,
    ]);

    return (
        <div className="app-container">
            <Header 
                mode={mode}
                onBack={handleBack}
                links={links || {}}
                {...names} 
            />
            {genCon}
        </div>
    )
}

export default App;
