var ksuForm = ksuForm || {};


ksuForm.addCompleteButton = function() {
    var $newButtonLocation = ksuForm.selectByName('top');
    $newButtonLocation.prepend('<button id="fillFormData">Fill out form</button>');
}

ksuForm.fillFormData = function() {
    ksuForm.highlightByName('p_req_class');
    ksuForm.highlightByName('p_config_serv_items');
    ksuForm.highlightByName('p_req_custom_dt');
    ksuForm.highlightByName('p_req_motive');
    ksuForm.highlightById('workItemForm_Attachments_Buttons');

    ksuForm.setSelectListValue('p_proj_team', 'WEB-NewRelease');
    ksuForm.setSelectListValue('p_proj_client', 'EMSA - Enrollment Management and Student Affairs');
    ksuForm.setSelectListValue('p_req_app_db_prom', 'application_and_database');
    ksuForm.setSelectListValue('p_req_class', 'Change');

    ksuForm.setRadioValue('p_deploy_date_flex', 'No');

    var teamDynamixTicketName = ksuForm.getTextValue('p_wf_input_name');
    ksuForm.setTextValue('p_proj_number', teamDynamixTicketName);

    ksuForm.setTextValue('p_devel_prim_contact', 'Richard Hildebrand');
    ksuForm.setTextValue('p_devel_prim_phone', '330-808-1799');
    ksuForm.setTextValue('p_config_serv_items', 'apphiveprod sqlprod03');
    ksuForm.setTextValue('p_possible_outage_user_count', '10');

    alert('Success!');
}

ksuForm.selectByName = function(name) {
    return $('[name="' + name + '"]');
}

ksuForm.highlightByName = function(name) {
    var $itemToHighlight = ksuForm.selectByName(name);
    ksuForm.highlight($itemToHighlight);
}

ksuForm.highlightById = function(id) {
    $itemToHighlight = $('#' + id);
    ksuForm.highlight($itemToHighlight);
}

ksuForm.highlight = function($itemToHighlight) {
    var className = 'ksu-form-highlight-items-to-be-considered';
    $itemToHighlight.addClass(className);

    var $rowToHighlight = $itemToHighlight.closest('tr');
    $rowToHighlight.addClass(className);
}

ksuForm.setSelectListValue = function(name, value) {
    var $selectList = ksuForm.selectByName(name);
    $selectList.val(value);
}

ksuForm.setRadioValue = function(name, value) {
    $('input[name="' + name+ '"][value="' + value + '"]').prop('checked', true);
}

ksuForm.setTextValue = function(name, value) {
    var $textField = ksuForm.selectByName(name);
    $textField.val(value);
}

ksuForm.getTextValue = function(name) {
    $textField = ksuForm.selectByName(name);
    return $textField.val();
}

$(document ).ready(function() {
    ksuForm.addCompleteButton();

    $('#fillFormData').click(function() {
        ksuForm.fillFormData();
    });
});