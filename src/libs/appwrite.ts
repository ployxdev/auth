import { Account, Client, ID } from 'appwrite';

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('664b0a3800245d42e2e8');

const account = new Account(client);

const createUser = (email: string, password: string) => {

  const promise = account.create(ID.unique(), email, password);

  promise.then(function (response) {
    console.log(response); // Success
  }, function (error) {
    console.log(error); // Failure
  });
}

const createVerification = () => {
  const promise = account.createVerification('http://192.168.1.60:5000/');

  promise.then(function (response) {
    console.log(response);
  }, function (error) {
    console.log(error);
  });
}

const login = (email: string, password: string) => {
  const promise = account.createEmailPasswordSession(email, password);
  promise.then(function (response) {
    console.log(response); // Success
  }, function (error) {
    console.log(error); // Failure
  });
}

const logout = () => {
  const promise = account.deleteSessions();
  promise.then(function (response) {
    console.log(response);
  }, function (error) {
    console.log(error);
  });
}

export { account, createUser, createVerification, login, logout };
