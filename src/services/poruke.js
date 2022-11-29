import axios from 'axios'

const osnovniURL= 'localhost:3001'
//const osnovniUrl = `https://poruke-apimjosipovi.herokuapp.com/api/poruke` 

const dohvatiSve = () => {   
    return axios.get(osnovniUrl);
}
 
const stvori = noviObjekt => {
    return axios.post(osnovniUrl, noviObjekt)
}
 
const osvjezi = (id, noviObjekt) => {
    return axios.put(`${osnovniUrl}/${id}`, noviObjekt)
}

const brisi = id => {
    return axios.delete(`${osnovniUrl}/${id}`)
}
 
export default { dohvatiSve, stvori, osvjezi, brisi}
