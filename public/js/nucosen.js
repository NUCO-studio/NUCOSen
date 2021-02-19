function openSupportModal() {
    document.getElementById('paymentmodal').classList.add('is-active');
}

function closeSupportModal() {
    document.getElementById('paymentmodal').classList.remove('is-active');
}

function applyPayingDays(rawday) {
    let days = Number(rawday || 0);
    let daysElement = document.getElementById('supportDays');
    let supportElement = document.getElementById('supportLink');
    let supportDaysContainer = document.getElementById('supportDaysContainer');

    if (days < 1 || isNaN(days)) {
        daysElement.classList.add('is-hidden');
        supportElement.classList.remove('is-hidden');
    }
    else {
        daysElement.classList.remove('is-hidden');
        supportElement.classList.add('is-hidden');
        if (days > 99) {
            supportDaysContainer.textContent = '99+';
        }
        else {
            supportDaysContainer.textContent = days;
        }
    }
}

function applyNotificationCounts(rawcounts) {
    let counts = Number(rawcounts || 0);
    let notificationIcon = document.getElementById('notifyicon');
    let notifyCount = document.getElementById('notifycount');
    if (counts < 1 || isNaN(counts)) {
        notificationIcon.classList.remove('mdi-bell');
        notificationIcon.classList.add('mdi-bell-outline');
        notifyCount.textContent = "";
    }
    else {
        notificationIcon.classList.remove('mdi-bell-outline');
        notificationIcon.classList.add('mdi-bell');
        if (counts > 99) {
            notifyCount.textContent = "99+";
        }
        else {
            notifyCount.textContent = counts;
        }
    }
}

var colorG = 'red';

function changeColor(color) {
    document.getElementById('main').classList.remove('color-' + colorG);
    colorG = color;
    document.getElementById('main').classList.add('color-' + colorG);
}