import { useMemo, useState } from "react";
import { tabs } from "../../../../mockData";
// import './tabsSwitcher.css';

function TabsSwitcher() {
    const [activeId, setActiveID] = useState(tabs[0]?.id)
    const activeTab = useMemo(() =>
        tabs.find(e => e.id === activeId)
        , [activeId])
    console.log("activeTab",activeTab)

    return (
        <>
            <h1>Tabs Switcher</h1>
            {
                tabs && tabs.map((e, index) => (
                    <>
                        <button onClick={() => setActiveID(e?.id)}>{e.label}</button>
                    </>
                ))
            }
            <div>{activeTab?.content}</div>
        </>
    )
}

export default TabsSwitcher;