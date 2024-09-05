import React, {useState, useMemo, useCallback} from 'react';

import Main from 'page/Main';
import Entry from 'page/entry';
import Header from 'page/header';

import 'assets/base.scss';
import './app.scss';

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

    const [names, setNames] = useState({})
    const [data, setData] = useState(initData);
    const [styles, setStyles] = useState(initData.styles || {});
    const [pagedFrames, setPagedFrames] = useState(initPagedFrames);
    const [components, setComponents] = useState(initData.components || []);
    const [exportSettings, setExportSettings] = useState(initData.exportSettings || exportSettingsOfProps || []);
    const [includeComponents, setIncludeComponents] = useState(mode !== 'local' && isMock ? true : !!settings.includeComponents)
    
    const [backFromDemo, setBackFromDemo] = useState(true)
    const [entryVisible, setEntryVisible] = useState(mode === 'local' ? false : isMock)
    
    const handleDataGot = useCallback((fileData: any, components: any, styles: any, exportSettings: any, pagedFrames: any) => {
        setEntryVisible(false);
        
        setData(fileData);
        setStyles(styles);
        setPagedFrames(pagedFrames);

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
