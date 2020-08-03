from flask import Flask
from flask import request
from flask_cors import CORS

# mentorme@email.com
# 123mentorme

import smtplib
import yagmail

# email = "mentorme@email.com"
# password = "123mentorme"

# sender = smtplib.SMTP(host="smtp.mail.com", port=587)
# sender.login(email, password)

yag = yagmail.SMTP("email", "password")

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

@app.route("/email", methods=["POST"])
def send_email():
    req = request.get_json()
    # sender.sendmail("mentorme@email.com", req['email'], req['message'])
    yag.send(req['to'], 'Message via MentorMe', "The following is a message from a prospective student looking to be mentored by you: \n " + req['message'] + "\n You can reach him at: " + + req["email"])
    return "Succeeded"
if __name__ == '__main__':
    app.run()