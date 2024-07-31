FROM golang:1.22
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod tidy
RUN go build -v -o main
CMD ["/app/main"]