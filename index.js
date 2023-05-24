// const argv = require("yargs").argv;
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts")



const  invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
          
    

        case "get":
            const oneContact = await contacts.getContactById(id );
            return console.log(oneContact);
        
 

        case "add":
            const newContact = await contacts.addContact({ name, phone, email });
            return console.log(newContact);
 

        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
    


        default:
        console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({action:"get", id:"C9sjBfCo4UJCWjzBnOtxl"});
// invokeAction({action:"add", name:"Tuesday", phone:"0990023282", email:'asjshfg@gmail.com'});
// invokeAction({action:"remove", id:"aWLyFYuNwnd8mHt3WgWvh"});

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
// console.table(invokeAction(argv))