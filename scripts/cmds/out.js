const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
  config: {
    name: "leave",
    aliases: ["out", "লিভ"],
    version: "1.3",
    author: "Sandy/fixed Milon",
    countDown: 5,
    role: 1,
    shortDescription: "bot will leave gc",
    longDescription: "أمر مغادرة المجموعة مع رسالة وداع",
    category: "owner",
    guide: "{pn} [tid,blank]"
  },

  // العمل بدون بادئة
  onChat: async function ({ api, event }) {
    if (!event.body) return;

    const message = event.body.trim().toLowerCase();

    if (message === "leave" || message === "out") {
      return api.sendMessage(
        "حان وقت المغادرة، أتمنى لكم وقتًا جميلًا. أنا في خدمة فادي، أدخلني متى أردت.",
        event.threadID,
        () => {
          api.removeUserFromGroup(
            api.getCurrentUserID(),
            event.threadID
          );
        }
      );
    }
  },

  // العمل بالبادئة
  onStart: async function ({ api, event, args }) {
    const id = args[0] || event.threadID;

    return api.sendMessage(
      "حان وقت المغادرة، أتمنى لكم وقتًا جميلًا. أنا في خدمة فادي، أدخلني متى أردت.",
      id,
      () => {
        api.removeUserFromGroup(
          api.getCurrentUserID(),
          id
        );
      }
    );
  }
};
