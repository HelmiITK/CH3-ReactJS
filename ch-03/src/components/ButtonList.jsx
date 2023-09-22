// import PropTypes from "prop-types"

export default function ButtonList({ onHandleAll, onHandleClick  }) {
    // onHandleAll, onHandleDone, onHandleTodo
    return (
        <>
        <div className="flex justify-between mb-14">
            <button onClick={onHandleAll} type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">
                All
            </button>
                <button onClick={() => onHandleClick("done")} type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">
                Done
            </button>
                <button onClick={() => onHandleClick("todo")} type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">
                Todo
            </button>
        </div>
        </>
    )
}

// ButtonList.propTypes = {
//     onHandleAll: PropTypes.func,
//     onHandleDone: PropTypes.func,
//     onHandleTodo: PropTypes.func
// };