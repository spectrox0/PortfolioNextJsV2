package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/smtp"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"os"
)

type email struct {
	name    string
	email   string
	subject string
	message string
}

//var (
//	oauthConfGl = &oauth2.Config{
//		ClientID:     "",
//		ClientSecret: "",
//		RedirectURL:  "https://developers.google.com/oauthplayground"",
//		Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email"},
//		Endpoint:     google.Endpoint,
//	}
//	oauthStateStringGl = ""
//)

func Handler(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var newEmail email
	err := decoder.Decode(&newEmail)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"status": "error", "status-code": "500"})
	} else {
		mailErr := sendEmail(newEmail)
		if mailErr != nil {
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(map[string]string{"status": "error", "status-code": "500"})
		} else {
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(map[string]string{"status": "ok", "status-code": "200"})
		}
	}

}

func sendEmail(emailData email) (err error) {
	from := os.Getenv("EMAIL")
	password := os.Getenv("PASSWORD_EMAIL")

	to := []string{
		os.Getenv("EMAIL"),
	}

	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	message := []byte("To: angel.emo.altuve@gmail.com\r\n" +
		"Subject: " + emailData.subject + "\r\n" +
		"\r\n" +
		"From: " + emailData.email + "\r\n" +
		"Name: " + emailData.name + "\r\n" +
		"Message: " + emailData.message + "\r\n")

	auth := smtp.PlainAuth("", from, password, smtpHost)

	err = smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, message)

	if err != nil {
		fmt.Println(err)
		return err
	}
	return err
}
