FROM python:3.11.1-buster

RUN curl -sSL https://install.python-poetry.org | python - && ln -s /root/.local/bin/poetry /usr/local/bin/poetry

COPY ./ /usr/local/backend/
WORKDIR /usr/local/backend
RUN poetry install

CMD ["poetry", "run", "uvicorn", "app:app", "--host", "0.0.0.0"]
