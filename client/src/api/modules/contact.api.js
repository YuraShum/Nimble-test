import privateClient from "../client";


const contactEndpoints = {
    list: 'contacts',
    add: 'contact',
    remove: ({ contactId }) => `contact/${contactId}`,
    getContactDetail: ({ contactId }) => `contact/${contactId}`,
    addTag: ({ contactId }) => `contact/${contactId}/tags`
}

const contactApi = {
    getContactList: async () => {
        try {
            const response = await privateClient.get(contactEndpoints.list, {
                params: {
                    sort: 'created:desc',
                }
            })
            return { response }
        } catch (error) {
            return { error }
        }
    },
    addContact: async (contactData) => {
        try {
            const response = await privateClient.post(contactEndpoints.add, {
                ...contactData,
                record_type: 'person',
                privacy: {
                    edit: null,
                    read: null,
                },
                owner_id: null
            })

            return { response }
        } catch (error) {
            return { error }
        }
    },
    removeContact: async (contactId) => {
        try {
            await privateClient.delete(contactEndpoints.remove({ contactId }))
        } catch (error) {
            return { error }
        }
    },
    getContactInformation: async (contactId) => {
        try {
            const response = await privateClient.get(contactEndpoints.getContactDetail({ contactId }))
            return { response }
        } catch (error) {
            return { error }
        }
    },
    addTag: async (contactId, tags) => {
        try{
            const response = await privateClient.put(contactApi.addTag({contactId}, {
                tag
            }))
        }catch(error){
            return {error}
        }
    } 
}