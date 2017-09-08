
export function generateSaveFormPayLoad() {
  let answerList = [];
  for(let i = 0; i < oneTime; i++) {
    let ticketNumber = getNumericString(13);
    let phoneNumber = getNumericString(10);
    answerList.push({
      "birthday":"1993-05-17",
      "branch": {
        "id" : 8
      },
      "email": "email" + __VU + "@example.com",
      "flyTicketNumber": ticketNumber,
      "lastName": lastNameList[Math.floor(Math.random() * lastNameList.length)] + __VU,
      "mothersMaidenName": mothersMaidenNameList[Math.floor(Math.random() * lastNameList.length)] + __VU,
      "name": nameList[Math.floor(Math.random() * lastNameList.length)] + __VU,
      "phone": phoneNumber,
      "gender": "MALE",
      "title": "Sr",
      "zipCode": "12345"
    });
  }

  return JSON.stringify({ "answerList": answerList });
};

function getNumericString(len) {
  let result = [];
  let possible = "0123456789";

  for (let i = 0; i < len; i++) {
    result.push(possible.charAt(Math.floor(Math.random() * 10)));
  }

  return result.join('');
};
