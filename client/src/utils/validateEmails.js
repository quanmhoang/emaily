const emailRe = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const trailingCommaRe = /(^,)|(,$)/g;
export default (emails) => {
    if (!!emails) {
        const invalidsEmails = emails
        .replace(trailingCommaRe, "")
        .split(',')
        .map(email => email.trim())
        .filter(email => !emailRe.test(email));
        if(invalidsEmails.length) {
        return `These emails are invalid: ${invalidsEmails}`;
        }
    } else {
        return "Please input some emails for recipient";
    }
 
}