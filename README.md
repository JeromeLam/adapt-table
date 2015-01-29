#adapt-table [![Build Status](https://travis-ci.org/JeromeLam/adapt-table.svg?branch=master)](https://travis-ci.org/JeromeLam/adapt-table)

An Adapt Learning Framework component that generates an HTML table.

##Installation

Copy the adapt-table folder into /src/components.

##Usage

Once installed, the table component can be used to generate and display an HTML table.

##Settings overview

A complete example of this components settings can be found in the [example.json](https://github.com/JeromeLam/adapt-table/blob/master/example.json) file. A description of the core settings can be found in the [Core model attributes](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes) wiki entry.

### Data description

Further settings for this component are:

####_component

This value must be: `table`

####_table

This is the root attribute that defines a table.

####_head

This groups all rows that belong to the table header.

####_body

This groups all rows that belong to the table body.

####_rows

Each item represents a group of cells that form a row.

Each group of cells is represented by an array of values or objects.

####_rowspan

Defines the number of rows a cell spans.

####_colspan

Defines the number of columns a cell spans.

####value

The value for this setting will be displayed as the cell value.

##Limitations

N/A

##Browser spec

N/A
