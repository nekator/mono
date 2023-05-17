## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ui/components).

## DB UI Core ➡ DB UI Components

### class

| Before    | Status | After    | Description |
| --------- | :----: | -------- | ----------- |
| `elm-tag` |   🔁   | `db-tag` |             |

### sizes

| Before  | Status | After | Description                                                                             |
| ------- | :----: | :---: | --------------------------------------------------------------------------------------- |
| `small` |   ❌   |  ❌   | We removed small tags because of tonality. But you can use `strong` to highlight a tag. |

### variants

| Before        | Status | After           | Description                                      |
| ------------- | :----: | --------------- | ------------------------------------------------ |
| `poi-*`       |   ❌   | ❌              | We removed all point of interest colors for now. |
| `track`       |   ❌   | ❌              | We removed track for now.                        |
| `error`       |   🔁   | `critical`      |                                                  |
| `informative` |   🔁   | `informational` |                                                  |
| `success`     |   🔁   | `successful`    |                                                  |

### icons

| Before      | Status | After | Description                                                    |
| ----------- | :----: | ----- | -------------------------------------------------------------- |
| `iconAfter` |   ❌   | ❌    | not valid anymore, for tags only icons before text are allowed |
