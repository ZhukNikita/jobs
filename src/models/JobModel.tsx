export interface JobModel {
    address : string,
    benefits : string[],
    createdAt : string,
    description : string,
    email: string,
    employment_type : string[],
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