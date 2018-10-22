FROM python:3
ENV PYTHONUNBUFFERED 1

# App setup
ADD . /code
WORKDIR /code

RUN apt-get update && apt-get upgrade -y && apt-get autoremove && apt-get autoclean

RUN apt-get install -y \
    libffi-dev \
    libssl-dev \
    libxml2-dev \
    libxslt-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zlib1g-dev \
    net-tools \
    vim

# Requirements installation
RUN pip install -r requirements.txt

RUN pip install mysqlclient
#COPY ./entrypoint.sh /
#ENTRYPOINT ["entrypoint.sh"]
WORKDIR /code
ENTRYPOINT ["python", "manage.py"]

CMD ["runserver", "0.0.0.0:8000"]


