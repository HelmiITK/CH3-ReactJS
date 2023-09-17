import HeaderSearch from "../components/HeaderSearch"
import FormSearch from "../components/FormSearch"
import HeaderList from "../components/HeaderList"
import ButtonList from "../components/ButtonList"
import ListActivity from "../components/ListActivity"
import Delete from "../components/Delete"
import Helmi from "../components/Helmi"

export default function HalamanUtama() {
    return (
        <>
            <div className="mt-6 p-4 border-4 border-slate-300 w-[850px] mx-auto">

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
                <ButtonList />
                {/* Button List Selesai */}

                {/* List Activity Mulai */}
                <ListActivity />
                {/* List Activity Selesai */}

                {/* Button Delete Mulai */}
                <Delete />
                {/* Button Delete Selesai */}

                {/* Footer Mulai */}
                <Helmi />
                {/* Footer Selesai */}

            </div>
        </>
    )
}
