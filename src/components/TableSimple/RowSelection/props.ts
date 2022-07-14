import { TableProps } from "@kushki/connect-ui";

const CELL_HEADER_SPACING: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 = 0;

enum TableBodyCellEnum {
  TITLE = "TITLE",
  TEXT = "TEXT",
  TAG = "TAG",
  OPTIONS = "OPTIONS",
  SWITCH = "SWITCH",
  CHECK = "CHECK",
  FLAG = "FLAG",
  TEXT_TOOLTIP = "TEXT_TOOLTIP",
  TEXT_ACTION = "TEXT_ACTION",
  CONTENT = "CONTENT",
}

const ROW_SELECTION_PROPS: TableProps = {
  allowSelection: true,
  header: {
    cells: [
      {
        align: "center",
        spacing: CELL_HEADER_SPACING,
        text: "Flag",
        type: "default",
      },
      {
        align: "center",
        spacing: CELL_HEADER_SPACING,
        text: "Cualquier cosa :v",
        type: "default",
      },
      {
        align: "center",
        spacing: CELL_HEADER_SPACING,
        text: "Tooltip",
        type: "default",
      },
    ],
    headerProps: {
      isDisable: false,
    },
  },
  isInitialLoading: false,
  isLoading: false,
  rows: [
    {
      id: "1",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "default",
        onClick: console.log,
      },
    },
    {
      id: "11",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "default",
        onClick: console.log,
      },
    },
    {
      id: "2",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "green",
        onClick: console.log,
      },
    },
    {
      id: "22",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "green",
        onClick: console.log,
      },
    },
    {
      id: "3",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "yellow",
        onClick: console.log,
      },
    },
    {
      id: "33",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "yellow",
        onClick: console.log,
      },
    },
    {
      id: "44",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "red",
        onClick: console.log,
      },
    },
    {
      id: "4",
      cells: [
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Colombia",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            cellProps: {
              align: "center",
              spacing: 1,
            },
            country: "Chile",
            type: "twolines",
          },
          type: TableBodyCellEnum.FLAG,
        },
        {
          props: {
            align: "center",
            cellProps: {
              align: "center",
              spacing: 1,
            },
            icon: "left",
            line1: "Línea 1",
            line2: "Línea 2",
            tooltipText: "Texto del tooltip",
            type: "twoLines",
          },
          type: TableBodyCellEnum.TEXT_TOOLTIP,
        },
      ],
      rowProps: {
        color: "red",
        onClick: console.log,
      },
    },
  ],
  showPagination: true,
};

export { ROW_SELECTION_PROPS };
