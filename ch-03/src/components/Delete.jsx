export default function Delete() {

    return (
        <>
            <div className="flex justify-between mt-10">
                {/* button delete done task */}
                <div>
                    <button id="1" type="submit" className="border-0 bg-red-500 text-slate-100 text-center text-lg w-[388px] p-2 rounded-md hover:bg-red-600">
                        Delete done task
                    </button>
                </div>
                {/* button delete all */}
                <div>
                    <button type="submit" className="border-0 bg-red-500 text-slate-100 text-center text-lg w-[388px] p-2 rounded-md hover:bg-red-600">
                        Delete all tasks
                    </button>
                </div>
            </div>
        </>
    )
}

