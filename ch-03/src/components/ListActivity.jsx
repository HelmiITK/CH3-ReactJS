import { useState } from "react";
import data from "../data/data.json"
import PropTypes from "prop-types"
import Delete from "./Delete";
import ButtonList from "./ButtonList";

export default function ListActivity({ onEdit }) {

    const [items, setItems] = useState(data);

    const handleButtonTodo = () => {
        const updatedItems = items.filter((item) => item.complete !== true);
        setItems(updatedItems);
    };

    const handleButtonDone = () => {
        const updatedItems = items.filter((item) => item.complete !== false);
        setItems(updatedItems);
        
    };

    const handleButtonAll = () => {
        window.location.reload(true)
    };

    // fungsi button delete mulai
    const handleRemoveItem = (id) => {
        const confirmDelete = window.confirm("Apakah anda yakin ingin menghapus list ini?");

        if (confirmDelete) {
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
            console.log("List item berhasil dihapus")
        } else (
            console.log("Penghapusan dibatalkan")
        )
    };
    // fungsi button delete selesai

    // fungsi button checkbox mulai
    function handleToggleItem(id) {
        setItems((items) => items.map((item) => item.id === id ? { ...item, complete: !item.complete }
            : item));
    }
    // fungsi button checkbox selesai


    // fungsi remove All items mulai
    const clearAllItems = () => {
        const confirmRemoveAllItems = window.confirm("Yakin mau hapus semua?");

        if (confirmRemoveAllItems) {
            setItems([]);
            console.log("Datamu sudah dihapus semua");
        } else (
            alert("wkwkw ngga jdi dihapus")
        )
    };
    // fungsi remove All items selesai

    // fungsi remove task done mulai
    const ClearDoneTask = () => {
        const confirmRemoveDoneTask = window.confirm("dihapus kh ini yg sudah done?");

        if (confirmRemoveDoneTask) {
            const updatedItems = items.filter((item) => item.complete !== true);
            setItems(updatedItems);
            console.log("Semua data item Listmu telah dihapus permanent");
        } else (
            console.log("Item list batal dihapus")
        )
    }
    // fungsi remove task done selesai

    return (
        <>
            <ButtonList onHandleAll={handleButtonAll} onHandleDone={handleButtonDone} onHandleTodo={handleButtonTodo} />
            {items.map((item) => (
                <div key={item.listToDo} className="p-3 border-2 my-5 border-slate-200 rounded-md text-lg font-medium">
                    <div key={(item.id)} className="flex justify-between">
                        <span style={item.complete ? { textDecoration: 'line-through', color: 'red' } : { textDecoration: 'none' }}>
                            {item.task}
                        </span>
                        <div className="flex gap-4">
                            {/* button checkox */}
                            <button onClick={() => handleToggleItem(item.id)}>
                                <input type="checkbox" />
                            </button>
                            {/* button edit */}
                            <button type="button" onClick={() => onEdit(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" baseProfile="basic"><polygon fill="#ff5" points="22,1 18.5,4.5 4,19 3,24 2,28 6,27 11,26 19.5,17.5 25.5,11.5 29,8" /><polygon fill="#ff7575" points="29,8 25.5,11.5 22,8" /><polygon fill="#ff9f9f" points="22,1 18.5,4.5 22,8" /><polygon fill="#ffd72b" points="6,27 11,26 7.5,22.5" /><polygon fill="#ff5" points="3,24 4,19 7.5,22.5" /><polygon fill="#ffea3e" points="4,19 18.5,4.5 7.5,22.5" /><polygon fill="#ff8f8f" points="29,8 22,8 22,1" /><polygon fill="#ffea3e" points="7.5,22.5 3,24 6,27" /><polygon fill="#ffca1e" points="19,11 18.5,4.5 25.5,11.5" /><polygon fill="#ffca1e" points="3,24 2,28 5,26" /><polygon fill="#ffb519" points="5,26 2,28 6,27" /><polygon fill="#ffb519" points="7.5,22.5 19.5,17.5 11,26" /><polygon fill="#ffb519" points="25.5,11.5 19.5,17.5 19,11" /><polygon fill="#ffd72b" points="18.5,4.5 19,11 7.5,22.5" /><polygon fill="#ffca1e" points="19,11 19.5,17.5 7.5,22.5" /></svg>
                            </button>
                            {/* button Delete */}
                            <button type="button" onClick={() => handleRemoveItem(item.id)}>
                                <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <Delete onDeleteAll={clearAllItems} onClearDoneTask={ClearDoneTask} />
        </>
    )
}

ListActivity.propTypes = {
    onEdit: PropTypes.func,
};
