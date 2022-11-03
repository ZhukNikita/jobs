export interface JobModel {
    address : string,
    benefits : [],
    createdAt : string,
    description : string,
    email: string,
    employment_type : [],
    id: string,
    location: locationInt,
    name : string,
    phone : string,
    pictures : string[],
    salary : string,
    title : string,
    updatedAt : string,
    rating : boolean
}
interface locationInt{
    lat:string
    long: string
}