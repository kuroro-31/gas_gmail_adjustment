// Gmailのメッセージをチェックする関数
function checkGmailMessages() {
  // 指定のメールタイトルと差出人を検索します
  let threads = GmailApp.search(
    '(subject:"テスト" OR from:sample@gmail.com) -subject:"これ以外"'
  );

  // メッセージがなければ、ログにメッセージを出力して終了します
  if (threads.length === 0) {
    Logger.log("No new messages.");
    return;
  }

  // 各メールスレッドをループで処理します
  for (let i = 0; i < threads.length; i++) {
    // 各メールメッセージをループで処理します
    threads[i].getMessages().forEach((message) => {
      message.moveToTrash();
      Logger.log("Deleted message with subject: " + message.getSubject());
    });
  }
}
