import { error } from '@sveltejs/kit'
import createClient from '$lib/prismicio'

export async function load({ fetch, request }) {
    const client = createClient({ fetch, request })

    // import data here
    //ex. const header = await client.getSingle('header');

    // return the data here

    // return { header }
}