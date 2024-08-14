import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
//import SignIn from '../app/(auth)/sign-in';
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.SkateStats',
    projectId: '66b3ef690020a35c9515',
    databaseId: '66b41673001bce5c31f4',
    userCollectionId: '66b45cb90026f1ae3cbb',
    storageId: '66b53223002c03d674b0'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
   try {
     const newAccount = await account.create(ID.unique(), email, password, username)

     if(!newAccount) throw Error;
     const avatarUrl = avatars.getInitials(username)

     await signIn(email, password);
     const newUser = await databases.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
     })
     return newUser;
   }  catch (error) {
    console.log(error);
    throw new Error(error);
   }

}

export const signIn = async (email, password) => {
    try {
        //createEmailPasswordSession() is different to the one the video used.
        const session = await account.createEmailPasswordSession(email, password)
        return session
        
    } catch (error) {
        throw new Error(error)
        
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)])
        if(!currentUser) throw Error;
        return currentUser.documents[0];        
    } catch (error) {
        console.log(error)
    }
}
