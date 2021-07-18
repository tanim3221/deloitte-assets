timeout_var = null;

function typeWriter(selector_target, text_list, placeholder = false, i = 0, text_list_i = 0, delay_ms = 150) {
    if (!i) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder = "";
        } else {
            document.querySelector(selector_target).innerHTML = "";
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder += txt.charAt(i);
        } else {
            document.querySelector(selector_target).innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, delay_ms, selector_target, text_list, placeholder, i, text_list_i);
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            setTimeout(typeWriter, (delay_ms * 5), selector_target, text_list, placeholder);
        } else {
            i = 0;
            setTimeout(typeWriter, (delay_ms * 3), selector_target, text_list, placeholder, i, text_list_i);
        }
    }
}

text_list = [
    "Search here...",
    "Search by Name e.g. Rakib Islam",
    "Search by Name e.g. Rakib",
    "Search by Employee ID e.g. 90203",
    "Search by Employee ID e.g. 203",
    "Search by Mobile Number e.g. 01727200000",
    "Search by Category Name e.g. Current Student",
    "Search by District e.g. Cumilla",
    "Search by Blood Group e.g. O+"
];

return_value = typeWriter(".search_input_id", text_list, true);