import React, {useEffect, useState} from "react";
import * as API from "../api";

const Users = () => {

    const [ad, setAd] = useState([])
    const [soyad, setSoyad] = useState([])
    const [telefon, setTelefon] = useState([])
    const [kisiler, setKisiler] = useState([])

    const onChangeAd = e => setAd(e.target.value)
    const onChangeSoyad = e => setSoyad(e.target.value)
    const onChangeTelefon = e => setTelefon(e.target.value)


    useEffect(() => {
        const getAllKisi = async () => {
            const kisiler = await API.getAll();
            setKisiler(kisiler.data)
        }
        getAllKisi()
    }, [])

    const addKisi = async (e) => {
        e.preventDefault()
        const newKisi = {
            ad,
            soyad,
            telefon
        }
        try {
            await API.addKisi(newKisi)
            setKisiler((await API.getAll()).data)
        } catch (e) {
            console.log(e)
        }
    }

    const onDelete = async (id) => {
        try {
            await API.deleteById(id);
            await setKisiler((await API.getAll()).data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div className="card">
                <h6 className="card-header">Kişi Ekleme</h6>
                <div className="card-body">
                    <form onSubmit={addKisi}>
                        <div className="form-group">
                            <label htmlFor="ad">Ad</label>
                            <input id="ad" type="text" name="ad"
                                   placeholder="isim giriniz" className="form-control"
                                   value={ad} onChange={onChangeAd}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Soyad</label>
                            <input id="soyad" type="text" name="soyad"
                                   placeholder="soyisim giriniz" className="form-control"
                                   value={soyad} onChange={onChangeSoyad}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Telefon</label>
                            <input id="telefon" type="text" name="telefon"
                                   placeholder="telefon giriniz" className="form-control"
                                   value={telefon} onChange={onChangeTelefon}/>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block"> Kaydet</button>
                    </form>
                </div>
            </div>
            <div className="card">
                <div>
                    <h6 className="card-header">Kişi Listesi</h6>
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Soyad</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            kisiler.map(kisi =>
                                <tr key={kisi.id}>
                                    <td>{kisi.id}</td>
                                    <td>{kisi.ad}</td>
                                    <td>{kisi.soyad}</td>
                                    <td>{kisi.telefon}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => onDelete(kisi.id)}> Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users;
