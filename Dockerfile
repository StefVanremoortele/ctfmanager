FROM python:3
ENV PYTHONUNBUFFERED 1

# Requirements installation
COPY requirements.txt /tmp
RUN pip install --requirement /tmp/requirements.txt
# App setup
COPY . /code
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
    tmux \
    vim-gnome

# Startup commands
ADD .vim /root/.vim 
COPY .vimrc /root
COPY .bashrc /root/.bashrc
#ENTRYPOINT ["entrypoint.sh"]
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]


