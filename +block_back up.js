$.get('https://raw.githack.com/kang87y/website/master/Entry.staticBlocks.js')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('stop_project', '작품 정지시키기     ', {
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            size: 11,
        }
    ],
    _class: 'stop_projects'
}, 'text', (sprite, script) => {
     Entry.engine.toggleStop();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('stop_project2', '%1초간 작품 일시정지시키기     ', {
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            size: 11,
        }
    ],
    def: [
        {
            type: "number",
            params: [`1`]
        },
    ],
    _class: 'stop_projects',
    map: {
         VALUE: 0,
    },
}, 'text', (sprite, script) => {
     const value = script.getNumberValue('VALUE', script);
     let wait = value*1000
     
     Entry.engine.togglePause();
    
     setTimeout(function() {
         Entry.engine.toggleRun();
         console.log(value);
     }, wait);
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('stop_project3', '대형화면으로 만들기     ', {
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            size: 11,
        }
    ],
    _class: 'stop_projects'
}, 'text', (sprite, script) => {
     Entry.engine.toggleFullScreen();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('day', '오늘 요일', {
}, {
    params: [],
    def: [],
    map: {},
    _class: 'day'
}, 'text', (sprite, script) => {
     let week = new Array('일', '월', '화', '수', '목', '금', '토');
     let today = new Date();
     let dayName = week[today.getDay()];
     return dayName;
}, 'basic_string_field');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('boost_mode', '부스트모드가 켜져있는가?  ', {
}, {
    params: [
    ],
    def: [],
    map: {},
    _class: 'boost_mode_check'
}, 'text', (sprite, script) => {
    if (useWebGL == true) {
        return true;
    } else {
        return false;
    }
}, 'basic_boolean_field')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('alert', '%1제목의 alert(경고창) 띄우기     ', {
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            size: 11,
        }
    ],
    def: [
        {
            type: "text",
            params: [`엔트리`]
        },
    ],
    _class: 'box_',
    map: {
        VALUE: 0
    },
}, 'text', (sprite, script) => {
    const value = script.getValue('VALUE', script);
    alert(value);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('box', '%1제목의 %2 띄우기   ', {
}, {
    params: [
        {
            type: "Block",
            accept: "string"
        },
        {
            type: "Dropdown",
            options: [
                ['confirm(선택창)', '1'],
                ['prompt(입력창)', '2']
            ],
         fontSize: 11,
         value: 'confirm(선택창)'
        },
    ],
    def: [
                {
                    type: 'text',
                    params: [`엔트리`]
                },
                null
    ],
    _class: 'box_',
    map: {
         LEFTHAND: 0,
         RIGHTHAND: 1
    },
}, 'text', (sprite, script) => {
    const leftValue = script.getValue('LEFTHAND', script);
    const rightValue = script.getField('RIGHTHAND', script);
    
    if (rightValue == '1') {
        let choose = confirm(leftValue);
        return choose;
    } else if (rightValue == '2') {
        let enter = prompt(leftValue);
        return enter;
    }
}, 'basic_string_field')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Entry.staticBlocks.push({
    category: 'API', blocks: [
        'stop_project',
        'stop_project2',
        'stop_project3',
        'boost_mode',
        'day',
        'alert',
        'box'
    ]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
    background-image: url(https://media.discordapp.net/attachments/629297490214256650/702376411670773760/26d58a757b92fe4b.png);
    background-repeat: no-repeat;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
    background-image: url(https://media.discordapp.net/attachments/629297490214256650/702377451271094292/2.png);
    background-color: #4c0099;
    border-color: #330066;
    color: #fff;
}
</style>
`)

$('#entryCategoryAPI').append('특수')
