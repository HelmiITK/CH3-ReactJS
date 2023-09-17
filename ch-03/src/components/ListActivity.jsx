// const kegiatan = 
[
    {
        "id": 1,
        "task": "Nyuci mobil",
        "complete": true
    }, {
        "id": 2,
        "task": "Memberi makan kucing",
        "complete": true
    }, {
        "id": 3,
        "task": "Olahraga 10 menit",
        "complete": false
    }, {
        "id": 4,
        "task": "Sarapan sereal",
        "complete": true
    }, {
        "id": 5,
        "task": "Belanja harian",
        "complete": false
    }, {
        "id": 6,
        "task": "Ngeprint tugas",
        "complete": true
    }, {
        "id": 7,
        "task": "Bayar tagihan bulanan",
        "complete": true
    }, {
        "id": 8,
        "task": "Berangkat kuliah",
        "complete": false
    }, {
        "id": 9,
        "task": "Les bahasa Inggris",
        "complete": true
    }, {
        "id": 10,
        "task": "Ke rumah Sabrina",
        "complete": false
    }]


export default function ListActivity() {
    return (
        <div className="flex mt-14 p-4 border-2 border-slate-200 rounded-md text-lg font-medium">
            {/* {kegiatan} */}
            <div className="w-1/2">
                <label htmlFor="Nyuci mobil">Nyuci mobil</label>
            </div>
            <div className="flex justify-end gap-4 w-1/2">
                <input className="w-5" type="checkbox" id="Nyuci mobil" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" baseProfile="basic"><polygon fill="#ff5" points="22,1 18.5,4.5 4,19 3,24 2,28 6,27 11,26 19.5,17.5 25.5,11.5 29,8" /><polygon fill="#ff7575" points="29,8 25.5,11.5 22,8" /><polygon fill="#ff9f9f" points="22,1 18.5,4.5 22,8" /><polygon fill="#ffd72b" points="6,27 11,26 7.5,22.5" /><polygon fill="#ff5" points="3,24 4,19 7.5,22.5" /><polygon fill="#ffea3e" points="4,19 18.5,4.5 7.5,22.5" /><polygon fill="#ff8f8f" points="29,8 22,8 22,1" /><polygon fill="#ffea3e" points="7.5,22.5 3,24 6,27" /><polygon fill="#ffca1e" points="19,11 18.5,4.5 25.5,11.5" /><polygon fill="#ffca1e" points="3,24 2,28 5,26" /><polygon fill="#ffb519" points="5,26 2,28 6,27" /><polygon fill="#ffb519" points="7.5,22.5 19.5,17.5 11,26" /><polygon fill="#ffb519" points="25.5,11.5 19.5,17.5 19,11" /><polygon fill="#ffd72b" points="18.5,4.5 19,11 7.5,22.5" /><polygon fill="#ffca1e" points="19,11 19.5,17.5 7.5,22.5" /></svg>
                <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" /></svg>
            </div>
        </div>
    )
}