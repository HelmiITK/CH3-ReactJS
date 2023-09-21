import PropTypes from "prop-types"

export default function Delete({ onDeleteAll, onClearDoneTask }) {
    const handleDeleteAll = () => {
        onDeleteAll();
    }

    return (
        <>
            <div className="flex justify-between mt-10">
                {/* button delete done task */}
                <div>
                    <button onClick={onClearDoneTask} id="1" type="submit" className="border-0 bg-red-500 text-slate-100 text-center text-lg w-[388px] p-2 rounded-md hover:bg-red-600">
                        Delete done task
                    </button>
                </div>
                {/* button delete all */}
                <div>
                    <button onClick={handleDeleteAll} type="submit" className="border-0 bg-red-500 text-slate-100 text-center text-lg w-[388px] p-2 rounded-md hover:bg-red-600">
                        Delete all tasks
                    </button>
                </div>
            </div>
        </>
    )
}

Delete.propTypes = {
    onDeleteAll: PropTypes.func,
    ClearDoneTask: PropTypes.func,
}