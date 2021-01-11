import { getDefaultNormalizer } from '@testing-library/react';
import http from './HTTPservices';


export default async function getAPIData() {

    const response = await http.get();

    return response.data.data;


}