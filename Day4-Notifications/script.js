const unreadCount = document.querySelector("#unread-count"),
  notificationCards = document.querySelectorAll(".notification-card"),
  unreadIndicators = document.querySelectorAll(".unread-indicator"),
  markAllAsRead = document.querySelector("#mark-all-as-read");
function notificationCount() {
  const unreadIndicators = document.querySelectorAll(".unread-indicator");
  return unreadIndicators.length;
}

function updateNotificationCount() {
  unreadCount.innerHTML = notificationCount();
}

window.addEventListener("load", () => {
  updateNotificationCount();
});

for (let i = 0; i < notificationCards.length; i++) {
  notificationCards[i].addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("unread")) {
      e.currentTarget.classList.remove("unread");
    }
    if (e.currentTarget.querySelector(".unread-indicator")) {
      const unreadIndicator =
        e.currentTarget.querySelector(".unread-indicator");
      unreadIndicator.remove();
    }
    updateNotificationCount();
  });
}

markAllAsRead.addEventListener("click", ()=>{
    for (let i = 0; i < notificationCards.length; i++) {
        if (notificationCards[i].classList.contains("unread")){
            notificationCards[i].classList.remove("unread");
        }
    }
    for (let i = 0; i < unreadIndicators.length; i++) {
        unreadIndicators[i].remove();
    }
    updateNotificationCount();
});
