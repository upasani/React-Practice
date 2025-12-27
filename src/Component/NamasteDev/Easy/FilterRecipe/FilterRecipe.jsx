// import recipesData from '../../../../mockData'
import { useState } from "react";
import { recipesData } from "../../../../mockData";
import './filterRecipe.css';
import Recipy from "./Recipy";

export default function FilterRecipe() {
    const [recipyData, setRecipyData] = useState(recipesData);
    const [filterData, setFilterData] = useState([])
    const [value, setValue] = useState(4.0);
    console.log("the filterData is", filterData)

    const handleFilter = (event) => {
        const filterValue = recipyData.filter((e) => e.rating == event.target.value);
        setFilterData(filterValue);
    }

    return (
        <>
            <div style={{ width: "20%", margin: "auto" }}>
                <h1 style={{ textWrap: "nowrap" }}>🍽️ Recipe Explorer</h1>
            </div>
            <div className="flex rate-card-container">
                <div className="flex">
                    <p>Filter By Rating:</p>
                    <div>
                        <select name="xyz" id="" onChange={handleFilter}>
                            <option value="4.0">4.0+</option>
                            <option value="4.3">4.3+</option>
                            <option value="4.5">4.5+</option>
                            <option value="4.7">4.7+</option>
                            <option value="4.9">4.9+</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Cart Item:{0}</h3>
                </div>
            </div>
            <h2 style={{ width: "20%", margin: "auto" }}>Average Rating:{filterData.length}</h2>
            <div className="flex">

                {
                    filterData.length > 0 ? (
                        filterData.map((e) => (
                            <Recipy key={e.id} {...e} />
                        )
                        )
                    ) : (
                        recipyData.map((e) => (
                            <Recipy key={e.id} {...e} />

                        ))
                    )
                }
            </div>
        </>
    )
}