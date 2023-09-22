import HeaderInput from "../components/HeaderInput"
import FormAdd from "../components/FormAdd"

export default function HalamanAdd({ name, items, setItems, setName }) {
    return (
        <>
            <div className="mt-6 p-4 border-4 border-slate-300 w-[850px] mx-auto">

                {/* Header input & back mulai */}
                <HeaderInput />
                {/* Header input & back selesai */}

                {/* Form Add Mulai */}
                <FormAdd name={name} items={items} setItems={setItems} setName={setName} />
                {/* Form Add Selesai */}

            </div>
        </>
    )
}
