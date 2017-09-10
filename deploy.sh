#!/usr/bin/env bash
gcloud app deploy app.yaml --project bigquerycreate --version $1 --no-promote -q
