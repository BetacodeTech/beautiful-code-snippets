import React from 'react';
import "./style.css"
import Highlight from 'react-highlight'


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

const language = "javascript";


const Console = () => {

    return (
        <div class="console">
            <div class="header">
                <div class="dot dot-red"></div>
                <div class="dot dot-yellow"></div>
                <div class="dot dot-green"></div>
            </div>
            <div class="content">
                <Highlight className={language}>
                    {code}
                </Highlight>
            </div>
        </div>
    )
};

export default Console;

