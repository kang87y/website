const LibraryCreator = {
    start: (blocksJSON, category, text) => {
        let blockArray = new Array
        // LibraryCreator 가져오기
        Entry.staticBlocks = [
            {
                category: 'start',
                blocks: [
                    'when_run_button_click',
                    'when_some_key_pressed',
                    'mouse_clicked',
                    'mouse_click_cancled',
                    'when_object_click',
                    'when_object_click_canceled',
                    'when_message_cast',
                    'message_cast',
                    'message_cast_wait',
                    'when_scene_start',
                    'start_scene',
                    'start_neighbor_scene',
                    'check_object_property',
                    'check_block_execution',
                    'switch_scope',
                    'is_answer_submited',
                    'check_lecture_goal',
                    'check_variable_by_name',
                    'show_prompt',
                    'check_goal_success',
                    'positive_number',
                    'negative_number',
                    'wildcard_string',
                    'wildcard_boolean',
                    'register_score',
                ],
            },
            {
                category: 'flow',
                blocks: [
                    'wait_second',
                    'repeat_basic',
                    'repeat_inf',
                    'repeat_while_true',
                    'stop_repeat',
                    '_if',
                    'if_else',
                    'wait_until_true',
                    'stop_object',
                    'restart_project',
                    'when_clone_start',
                    'create_clone',
                    'delete_clone',
                    'remove_all_clones',
                ],
            },
            {
                category: 'moving',
                blocks: [
                    'move_direction',
                    'bounce_wall',
                    'move_x',
                    'move_y',
                    'move_xy_time',
                    'locate_x',
                    'locate_y',
                    'locate_xy',
                    'locate_xy_time',
                    'locate',
                    'locate_object_time',
                    'rotate_relative',
                    'direction_relative',
                    'rotate_by_time',
                    'direction_relative_duration',
                    'rotate_absolute',
                    'direction_absolute',
                    'see_angle_object',
                    'move_to_angle',
                ],
            },
            {
                category: 'looks',
                blocks: [
                    'show',
                    'hide',
                    'dialog_time',
                    'dialog',
                    'remove_dialog',
                    'change_to_some_shape',
                    'change_to_next_shape',
                    'add_effect_amount',
                    'change_effect_amount',
                    'erase_all_effects',
                    'change_scale_size',
                    'set_scale_size',
                    'flip_x',
                    'flip_y',
                    'change_object_index',
                ],
            },
            {
                category: 'brush',
                blocks: [
                    'brush_stamp',
                    'start_drawing',
                    'stop_drawing',
                    'set_color',
                    'set_random_color',
                    'change_thickness',
                    'set_thickness',
                    'change_brush_transparency',
                    'set_brush_tranparency',
                    'brush_erase_all',
                ],
            },
            {
                category: 'text',
                blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
            },
            {
                category: 'sound',
                blocks: [
                    'sound_something_with_block',
                    'sound_something_second_with_block',
                    'sound_from_to',
                    'sound_something_wait_with_block',
                    'sound_something_second_wait_with_block',
                    'sound_from_to_and_wait',
                    'sound_volume_change',
                    'sound_volume_set',
                    'sound_silent_all',
                ],
            },
            {
                category: 'judgement',
                blocks: [
                    'is_clicked',
                    'is_press_some_key',
                    'reach_something',
                    'boolean_basic_operator',
                    'boolean_and_or',
                    'boolean_not',
                ],
            },
            {
                category: 'calc',
                blocks: [
                    'calc_basic',
                    'calc_rand',
                    'coordinate_mouse',
                    'coordinate_object',
                    'get_sound_volume',
                    'quotient_and_mod',
                    'calc_operation',
                    'get_project_timer_value',
                    'choose_project_timer_action',
                    'set_visible_project_timer',
                    'get_date',
                    'distance_something',
                    'get_sound_duration',
                    'get_user_name',
                    'length_of_string',
                    'combine_something',
                    'char_at',
                    'substring',
                    'index_of_string',
                    'replace_string',
                    'change_string_case',
                ],
            },
            {
                category: 'variable',
                blocks: [
                    'variableAddButton',
                    'listAddButton',
                    'ask_and_wait',
                    'get_canvas_input_value',
                    'set_visible_answer',
                    'get_variable',
                    'change_variable',
                    'set_variable',
                    'show_variable',
                    'hide_variable',
                    'value_of_index_from_list',
                    'add_value_to_list',
                    'remove_value_from_list',
                    'insert_value_to_list',
                    'change_value_list_index',
                    'length_of_list',
                    'is_included_in_list',
                    'show_list',
                    'hide_list',
                ],
            },
            {
                category: 'func',
                blocks: ['functionAddButton'],
            },
            {
                category: 'analysis',
                blocks: [
                    'analizyDataAddButton',
                    'append_row_to_table',
                    'insert_row_to_table',
                    'delete_row_from_table',
                    'set_value_from_table',
                    'get_table_count',
                    'get_value_from_table',
                    'calc_values_from_table',
                    'open_table_chart',
                    'close_table_chart',
                ],
            },
            {
                category: 'ai_utilize',
                blocks: [
                    'aiUtilizeBlockAddButton',
                    'aiUtilizeModelTrainButton',
                    'audio_title',
                    'check_microphone',
                    'speech_to_text_convert',
                    'speech_to_text_get_value',
                    'get_microphone_volume',
                    'tts_title',
                    'read_text',
                    'read_text_wait_with_block',
                    'set_tts_property',
                    'translate_title',
                    'get_translated_string',
                    'check_language',
                    'video_title',
                    'video_draw_webcam',
                    'video_check_webcam',
                    'video_flip_camera',
                    'video_set_camera_opacity_option',
                    'video_motion_value',
                    'video_toggle_model',
                    'video_is_model_loaded',
                    'video_number_detect',
                    'video_toggle_ind',
                    'video_body_part_coord',
                    'video_face_part_coord',
                    'video_detected_face_info',
                ],
            },
            {
                category: 'expansion',
                blocks: [
                    'expansionBlockAddButton',
                    'weather_title',
                    'check_weather',
                    'check_finedust',
                    'get_weather_data',
                    'get_current_weather_data',
                    'get_today_temperature',
                    'check_city_weather',
                    'check_city_finedust',
                    'get_city_weather_data',
                    'get_current_city_weather_data',
                    'get_today_city_temperature',
                    'festival_title',
                    'count_festival',
                    'get_festival_info',
                    'behaviorConductDisaster_title',
                    'count_disaster_behavior',
                    'get_disaster_behavior',
                    'behaviorConductLifeSafety_title',
                    'count_lifeSafety_behavior',
                    'get_lifeSafety_behavior',
                ],
            },
            {
                category: 'arduino',
                blocks: [
                    'arduino_reconnect',
                    'arduino_open',
                    'arduino_cloud_pc_open',
                    'arduino_connect',
                    'arduino_download_connector',
                    'download_guide',
                    'arduino_download_source',
                    'arduino_noti',
                ].concat(EntryStatic.DynamicHardwareBlocks),
            }
        ];
        EntryStatic.getAllBlocks = () => {
            return Entry.staticBlocks;
        }
        function updateCategory(category, options) {
            Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
                { category: 'start', visible: true },
                { category: 'flow', visible: true },
                { category: 'moving', visible: true },
                { category: 'looks', visible: true },
                { category: 'brush', visible: true },
                { category: 'text', visible: true },
                { category: 'sound', visible: true },
                { category: 'judgement', visible: true },
                { category: 'calc', visible: true },
                { category: 'variable', visible: true },
                { category: 'func', visible: true },
                { category: 'analysis', visible: true },
                { category: 'ai_utilize', visible: true },
                { category: 'expansion', visible: true },
                { category: category, visible: true },
                { category: 'arduino', visible: true }
            ]);
            for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
                if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == "entryCategorytext")) {
                    $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
                }
            }
            Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
            Entry.playground.blockMenu._generateCategoryCode(category);
            if (options) {
                if (options.background) {
                    $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
                    $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
                    if (options.backgroundSize) {
                        $(`#entryCategory${category}`).css('background-size', options.backgroundSize + "px");
                    }
                }
                if (options.name) {
                    $(`#entryCategory${category}`)[0].innerText = options.name
                }
            }
        }
        function addBlock(blockname, template, color, params, _class, func, skeleton = 'basic') {
            Entry.block[blockname] = {
                color: color.color,
                fontColor: color.font,
                outerLine: color.outline,
                skeleton: skeleton,
                statement: [],
                params: params.params,
                events: {},
                def: {
                    params: params.define,
                    type: blockname
                },
                paramsKeyMap: params.map,
                class: _class ? _class : 'default',
                func: func,
                template: template
            }
        }
        // 블록 추가하기
        for (let i in blocksJSON) {
            let block = blocksJSON[i]
            blockArray.push(block.name)
            addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton)
        }
        // 블록 반영
        Entry.staticBlocks.push({ category: category, blocks: blockArray })
        // 카테고리 업데이트 (ws에서만)
        if (typeof useWebGL == "undefined") {
            updateCategory(category)
            // 아이콘 적용
            $('head').append(`<style>#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware_on.svg);background-color:#00b6b1;border-color:#00b6b1;color:#fff}</style>`)
            // 카테고리 이름 적용
            $(`#entryCategory${category}`).append(text)
        }
        console.log('%cEntBlocks 2.0 Made by thoratica.', 'background-color: #007bff; color: #e9ecef; padding: .7rem; font-family: sans-serif; font-size: .9rem; border-radius: 99999rem;')
        console.log('%cEntBlocks 2.0 follows the GNU General Public License version 3.0\nEntBlocks 2.0은 GNU General Public License version 3.0를 따릅니다.', 'font-family: sans-serif; font-size: .7rem')
    }
}
let blockPOST
const blocks = [
    {
        name: 'fetchBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'fetch',
                color: EntryStatic.colorSet.common.TEXT,
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'get',
        template: '%1 가져오기 (GET)',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://playentry.org/api/discuss/findNotice']
            }
        ],
        map: {
            APIURL: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(script.getValue('APIURL', script))
            let data = await res.json()
            return data
        },
    },
    {
        name: 'post',
        template: '%1에 %2 올리기 (POST)%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://playentry.org/api/discuss']
            },
            {
                type: 'text',
                params: [`{ "images": [], "category": "free", "title": "엔트리봇", "content": "사랑스러워", "groupNotice": false }`]
            },
            null
        ],
        map: {
            APIURL: 0,
            DATA: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            if (confirm(`"올리기(POST) 요청" 을 허용하시겠습니까?\n내용: ${script.getValue('DATA', script)}`)) {
                let res = await fetch(script.getValue('APIURL', script), {
                    method: 'POST',
                    body: script.getValue('DATA', script),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                blockPOST = await res.json()
            }
            return script.callReturn()
        },
    },
    {
        name: 'postData',
        template: '올리기 응답',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            return blockPOST
        },
    },
    {
        name: 'arrayBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '배열',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'arrayItem',
        template: '배열 %1 의 %2 번째 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`['1', '2']`]
            },
            {
                type: 'text',
                params: ['1']
            }
        ],
        map: {
            ARRAY: 0,
            ITEM: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let array = eval(script.getValue('ARRAY', script))
            let done = array[script.getValue('ITEM', script) - 1]
            return done
        },
    },
    {
        name: 'arrayLength',
        template: '배열 %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`['1', '2']`]
            }
        ],
        map: {
            ARRAY: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = eval(script.getValue('ARRAY', script)).length
            return done
        },
    },
    {
        name: 'JSONBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'JSON',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'jsonKey',
        template: 'JSON %1 의 %2 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`{ "title": "Hello, world!" }`]
            },
            {
                type: 'text',
                params: ['title']
            }
        ],
        map: {
            JSON: 0,
            KEY: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let json = eval(script.getValue('JSON', script))
            let done = json[script.getValue('KEY', script)]
            return done
        },
    },
    {
        name: 'jsonLength',
        template: 'JSON %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`{ "title": "Hello, world!" }`]
            }
        ],
        map: {
            JSON: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
            return done
        },
    },
    {
        name: 'toastBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '토스트',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'toast',
        template: '%1 제목과 %2 내용의 %3 토스트를 %4 출력하기%5',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Dropdown',
                options: [
                    ['성공', 'success'],
                    ['경고', 'warning'],
                    ['오류', 'alert']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'success'
            },
            {
                type: 'Dropdown',
                options: [
                    ['유지되게', 'true'],
                    ['잠시 뒤 사라지게', 'false']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'true'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`알림`]
            },
            {
                type: 'text',
                params: [`엔트리`]
            },
            null,
            null,
            null
        ],
        map: {
            TITLE: 0,
            CONTENT: 1,
            TYPE: 2,
            HIDE: 3
        },
        class: 'text',
        func: async (sprite, script) => {
            let hide
            if (script.getValue('HIDE', script) == 'true') {
                hide = true
            } else {
                hide = false
            }
            eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
            return script.callReturn()
        },
    },
    {
        name: 'consoleBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '콘솔',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'console',
        template: '%1 내용을 브라우저 콘솔에 %2 하기%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Dropdown',
                options: [
                    ['log', 'log'],
                    ['warn', 'warn'],
                    ['error', 'error'],
                    ['info', 'info']
                ],
                fontSize: 11,
                arrowColor: '#FFD974',
                value: 'log'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`엔트리`]
            },
            null,
            null
        ],
        map: {
            CONTENT: 0,
            TYPE: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
            return script.callReturn()
        },
    },
    {
        name: 'consoleClear',
        template: '브라우저 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            null
        ],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'entryConsole',
        template: '%1 내용을 엔트리 콘솔에 출력하기%2',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`엔트리`]
            },
            null
        ],
        map: {
            CONTENT: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.print(script.getValue('CONTENT', script))
            return script.callReturn()
        },
    },
    {
        name: 'entryConsoleClear',
        template: '엔트리 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            null
        ],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'judgeBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '판단',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'boostMode',
        template: '부스트 모드가 켜져 있는가?',
        skeleton: 'basic_boolean_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            (typeof useWebGL == 'undefined') ? false : useWebGL == true ? true : false
        },
    },
    {
        name: 'calcBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '계산',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'getBrowser',
        template: '브라우저 이름',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            return Entry.userAgent
        },
    },
    {
        name: 'varBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '자료',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'changeVar',
        template: '변수 %1 값을 %2 으로 변경%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: [`user.username`]
            },
            {
                type: 'text',
                params: ['entry']
            },
            null
        ],
        map: {
            VARNAME: 0,
            VALUE: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
            return script.callReturn()
        },
    },
    {
        name: 'likeList',
        template: '이 작품 좋아요 목록',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
            let data = await res.json()
            return data
        },
    },
    {
        name: 'webBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: '웹',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'openLink',
        template: '새 탭에서 웹사이트 %1 열기%2',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Indicator',
                img: 'block_icon/hardware_icon.svg',
                size: 11,
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://www.thoratica.net']
            },
            null
        ],
        map: {
            URL: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            if (confirm(`"새 탭에서 웹사이트 열기" 를 허용하시겠습니까?\nURL: ${script.getValue('URL', script)}`)) {
                window.open(`https://block.thoratica.tech/urlCheck.html?goto=${script.getValue('URL', script)}`, '_blank').focus()
            }
            return script.callReturn()
        },
    },
    {
        name: 'helpBlocks',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'POST 도우미',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    },
    {
        name: 'commuPostHelper',
        template: '제목 %1 내용 %2 JSON',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            },
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: ['엔트리봇']
            },
            {
                type: 'text',
                params: ['사랑스러워']
            },
        ],
        map: {
            TITLE: 0,
            CONTENT: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            return `{ "images": [], "category": "free", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`
        },
    },
    {
        name: 'copy',
        template: '%1',
        skeleton: 'basic_text',
        color: {
            default: EntryStatic.colorSet.common.TRANSPARENT,
            darken: EntryStatic.colorSet.common.TRANSPARENT
        },
        params: [
            {
                type: 'Text',
                text: 'EntBlocks 2.1 Made by thoratica.\nEntBlocks 2.1 follows the GPL v3 License.',
                color: EntryStatic.colorSet.common.TEXT,
                class: 'bold',
                align: 'center'
            }
        ],
        def: [],
        map: {},
        class: 'text'
    }
]

LibraryCreator.start(blocks, 'API', '기타')
