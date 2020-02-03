const types = {
    "SET_SNIPET": "SET_SNIPET",
    "TOOGLE_DIALOG": "TOOGLE_DIALOG",
};

const actions = {
    setSnipet: (code, author, authorImage, codeType, social) => {
        return {
            "type": types.SET_SNIPET,
            code,
            author,
            authorImage,
            codeType,
            social
        }
    },
    toogleDialog: (open) => {
        return {
            "type": types.TOOGLE_DIALOG,
            open
        }
    }
};

const code = `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="sssss"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`;

const initialState = {
    "code": code,
    "author": "Marco Mendão",
    "authorImage": "https://trello-attachments.s3.amazonaws.com/5a0b139f45ffc6a03302373d/5a78660b9d750c86294ea7d1/d9efa6cab5eccd418dd488fa8641e598/eu1.jpg",
    "codeType":"javascript",
    "social": "@marco.mendao",
    "dialogOpen":false
};

function snipet(state = initialState, action) {
    switch (action.type) {
        case types.SET_SNIPET:
            const {code, author, authorImage, codeType, social} = action;
            return {...initialState, code, author, authorImage, codeType, social};
        case types.TOOGLE_DIALOG:
            return {...initialState, dialogOpen: action.open};
        default:
            return state
    }
}

export {snipet, actions}
