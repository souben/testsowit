FROM python:3

ENV PYTHONBUFFERED 1

COPY requirements.txt /

RUN pip install -r /requirements.txt


# Setup of dependecies , I'll need this for postgres ( to make work with geoDjango )
RUN apt-get update &&\
    apt-get install -y binutils libproj-dev gdal-bin

RUN mkdir /app
WORKDIR /app

COPY . /app/

EXPOSE 80


