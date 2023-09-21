import HeaderSearch from "../components/HeaderSearch"
import FormSearch from "../components/FormSearch"
import HeaderList from "../components/HeaderList"
// import ButtonList from "../components/ButtonList"
import ListActivity from "../components/ListActivity"
import Helmi from "../components/Helmi"

import toDoList from "../data/data.json"
import { useState } from "react"

export default function HalamanUtama() {
    const [items, setItems] = useState(toDoList);

    // fungsi edit to-do-list mulai
    const editTodo = (index) => {
        const newText = prompt("Edit todo:", items[index-1].task);
        if (newText !== null) {
            const updatedTodos = [...items];
            updatedTodos[index-1].task = newText;
            setItems(updatedTodos);
            console.log(`Data item diubah menjadi: "${newText}"`)
        }
    };
    // fungsi edit to-do-list selesai    


    

    return (
        <>
            <div className="my-6 p-4 border-4 border-slate-300 w-[850px] mx-auto">

                {/* Header Search Mulai */}
                <HeaderSearch />
                {/* Header Search Selesai */}

                {/* Form Search Mulai */}
                <FormSearch />
                {/* Form Search Selesai */}

                {/* Header List Mulai */}
                <HeaderList />
                {/* Header List Selesai */}

                {/* Button List Mulai */}
                {/* <ButtonList /> */}
                {/* Button List Selesai */}

                {/* List Activity Mulai */}
                <ListActivity onEdit={editTodo} />
                {/* List Activity Selesai */}

                {/* Button Delete Mulai */}
                
                {/* Button Delete Selesai */}

                {/* Footer Mulai */}
                <Helmi />
                {/* Footer Selesai */}

            </div>
        </>
    )
}

