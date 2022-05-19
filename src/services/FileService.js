import axios from "axios";
const url = "http://localhost:8080/api/images";
const uploadImage = (item)=>axios.post(url + "/upload",item);
const getAllImages = ()=>axios.get(url + "/all");
const getImageById = (id)=> axios.get(`${url}/image/${id}`)
const deleteImage = (id) => axios.delete(`${url}/delete/${id}`)
const FileService = {uploadImage,getAllImages,getImageById,deleteImage}

export default FileService;
