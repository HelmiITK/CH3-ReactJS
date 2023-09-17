export default function ButtonList() {
    return (
        <div className="flex justify-between">
            <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">All</button>
            <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">Done</button>
            <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[250px] p-2 rounded-md hover:bg-cyan-600">Todo</button>
        </div>
    )
}