import { Link } from "react-router-dom"

export default function FormSearch() {
    return (
        <div className="mt-4 mb-3 p-4 border-2 border-slate-200 rounded-md">
            <form action="">

                <div className="flex">
                    <label htmlFor="search">
                        <svg className="border-0 bg-cyan-500 rounded-s-md h-11 w-11 p-2" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="white"><circle cx="8.5" cy="8.5" r="5" /><path d="m17.571 17.5-5.571-5.5" /></g></svg>
                    </label>
                    <input  className="border rounded-e-md p-2 pl-3 w-[410px]" type="text" placeholder="Search Todo" id="search" />
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[453px] p-2 rounded-md hover:bg-cyan-600">
                        Search
                    </button>
                    <Link to="/halaman-add">
                        <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-[202px] p-2 rounded-md hover:bg-cyan-600">
                            Add new Task
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}