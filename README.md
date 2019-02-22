# pdfAnnotate

*pdfAnnotate* allows the annotation of PDF documents in javascript. It works in a browser, as well as in a nodejs environment and its intention is to provide a simple interface to annotate PDF documents. The annotated PDF document can be easily downloaded or further processed.

**Note:** pdAnnotate is **no** PDF viewer/ renderer. It provides an API to create different types of PDF annotations. For implementing a web-based PDF editor we recommend to use it in combination with *PDF.js* or a similar renderer.

# Table of Contents

1. [Documentation](#Documentation)
    1. [Installation](#Installation)
    2. [Getting Started](#GettingStarted)
    3. [Demo / Examples](#Examples)
        1. [The Translation of Coordinates](#TranslationCoordinates)
        2. [Quadpoints](#QuadPoints)
    4. [API Documentation](#API)
        1. [constructor(...)](#constructor)
        2. [loadFile(...)](#loadfile)
        3. [createTextAnnotation(...)](#createtext)
        4. [createHighlightAnnotation(...)](#createhighlight)
        5. [createUnderlineAnnotation(...)](#createunderline)
        6. [createSquigglyAnnotation(...)](#createsquiggly)
        7. [createStrikeOutAnnotation(...)](#createstrikeout)
        8. [createFreeTextAnnotation(...)](#createfreetext)
        9. [createLineAnnotation(...)](#createline)
        10. [createCircleAnnotation(...)](#createcircle)
        11. [createSquareAnnotation(...)](#createsquare)
        12. [createPolygonAnnotation(...)](#createpolygon)
        13. [createPolyLineAnnotation(...)](#createpolyline)
        14. [createStampAnnotation(...)](#createstamp)
        15. [createCaretAnnotation(...)](#createcaret)
        16. [createInkAnnotation(...)](#createink)
        17. [createPopupAnnotation(...)](#createpopup)
        18. [getAnnotations()](#getAnnotations)
        19. [write(...)](#write)
        20. [download(...)](#download)
    5. [How does the Library Works?](#HowWorks)
        1. [Trivia](#Trivia)
        2. [Adding an Annotation](#AddingAnnotation)
        3. [Document Updates](#DocumentUpdates)
        4. [PDF Objects](#PDFObjects)

# <a name="Documentation"></a>Documentation

## <a name="Installation"></a>Installation

Either use npm for the installation or reference the bundled file from the *_bundles* directory.

```
npm install annotpdf
```

## <a name="GettingStarted"></a>Getting Started

To add annotations the *AnnotationFactory* needs to be initialized. One approach is to use the static *loadFile* method that takes as argument a filepath and than initializes the factory with the corresponding PDF document data.

Annotations can easily be created by calling `creator` methods (see [API Documentation](#API)). Finally the extended document can be downloaded by calling the *download* method.

```
pdfAnnotate.AnnotationFactory.loadFile(path).then((factory) => {
                        pdfFactory.createTextAnnotation(0, [50, 50], "Pop up note", "Max")
                        pdfFactory.download()
                        })
```
When using a PDF viewer, as for instance *PDF.js* the factory can be initialized as follows:
```
pdfDocument.getData().then( (data) => {
                let pdfFactory = new pdfAnnotate.AnnotationFactory(data)
                })
```

Thereby *pdfDocument* is the PDF document representation of the PDFjs library as provided by `pdfjsLib.getDocument(...)`. See the [examples](#Examples) for more information.

## <a name="Examples"></a>Demo / Examples

An example application that uses the *pdfAnnotate* library together with *PDFjs* is given in the examples directory: **pdfjsExample.html**. By reading the code you might understand how to utilize the library and get some ideas how to combine it with the *PDFViewer*.

Although it is part of the code, we want to discuss the solution of a common problem when using PDFjs together with annotation libraries:

### <a name="TranslationCoordinates"></a>The Translation of Coordinates

When adding an annotation to a PDF most of the time the position of the annotation is determined by a mouse click. Depending on the object to which the click event handler is attached to the position coordinates are shifted by an offset or the PDF document is scaled.

Therefore we start by subtracting the offsets from the coordinates. This must be done with respect to the current page. Positioning of objects in PDF document is always based on the coordinate system of a page. A page spans a canvas on which multiple objects of different types are placed.

Finally we need to consider the viewport of the PDF representation. The PDF might be scaled. This must be considered when computing the coordinates.

The following code shows an examplary code snippet to translate the coordinates:

```
pdfContainer.addEventListener('click', (evt) => {
                let x = evt.pageX - $('#page' + pdfViewer.currentPageNumber).offset().left
                let y = evt.pageY - $('#page' + pdfViewer.currentPageNumber).offset().top

                x, y = pdfViewer._pages[pdfViewer.currentPageNumber - 1].viewport.convertToPdfPoint(x, y)
                })
```
**Note** that we assumed that you used the PDFjs *PDFViewer* for displaying the PDF and we utilized *JQuery* for the offset computation.

### <a name="QuadPoints"></a>Quadpoints

Quadpoints are a feature of PDF annotations to describe mulitple rectangles, where every rectangle is defined by four points given in *x* any *y* coordinates. The order of the points can be observed in the following depiction:

![Quadpoints](./documentation/quadpoints.png  "Quadpoints")

Please note the order. The PDF specification defines another order, but it seems to be an error (cfg. [Stackoverflow discussion](https://stackoverflow.com/questions/9855814/pdf-spec-vs-acrobat-creation-quadpoints) ) in the document.

It is possible to define multiple rectangles in a quadpoint array. The length of the quadpoints array must be a multiple of *8*. In some cases the API does not require the definition of quadpoints, although the definiton is actually required by the PDF specification. In these cases we derive the quadpoints directly from the provided rect array. However, it is always possible to overwrite this behaviour by providing the quadpoint array.

Please note that the coordinate system origin in PDF canvas is the **left bottom** corner.

## <a name="API"></a>API Documentation

In the following we introduce the API.

### <a name="constructor"></a>constructor(...)
It is possible to create an annotation factory and initialize it directly with the data of a PDF document given as *Int8Array*. This is for instance useful, when using the pdfAnnotate library with *PDFjs*.

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| data |  Int8Array | The PDF document data |

### <a name="loadfile"></a>loadFile(...)

*loadFile* is a static method of the factory. It creates a factory object initialized with the data from the document specified by the provided path.

It returns a promise with the instantiated factory as argument.

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| path | string | Path to the PDF file |

### <a name="createtext"></a>createTextAnnotation(...)

A text annotation is an icon, which shows a popup text when clicking on it.

![ Example of a text annotation](./documentation/TextAnnotation.png  "Example of a text annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   Rectangle defining the coordinates \[x, y\] to place the annotation. It is also possible to specify \[x_1, y_1, x_2, y_2 \] to define the bounds of the annotation. |
| contents | string |  The annotation text ('Pop up note' in the example) |
| author | string |    The author name. ('Max' in the example) |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createhighlight"></a>createHighlightAnnotation(...)
The highlight annotation emphasizes a selected text, with a semitransparent color.

![ Example of a highlight annotation](./documentation/HighlightAnnotation.png  "Example of a highlight annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   Rectangle defining the size and the position of the annotation. The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the rectangle.  If you specify the quadPoints array you can also hand over an empty list. The library takes the convex hull of your quadpoint definitions. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|
| quadPoints | number array | Optional argument for specifying the quadpoints of the annotation (cfg. [Quadpoints](#QuadPoints) ). |

### <a name="createunderline"></a>createUnderlineAnnotation(...)
The underline annotation underlines a selected text. However, see the remark: This annotation is not always correctly rendered.

![ Example of an underline annotation](./documentation/UnderlineAnnotation.png  "Example of an underline annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added  (starting with 0)|
| rect  |   number array   |   Rectangle defining the size and the position of the annotation. The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the rectangle.  If you specify the quadPoints array you can also hand over an empty list. The library takes the convex hull of your quadpoint definitions. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|
| quadPoints | number array | Optional argument for specifying the quadpoints of the annotation (cfg. [Quadpoints](#QuadPoints) ). |

**Note** The underline annotation is not displayed by the PDFjs renderer. However, it is displayed in the chrome PDF viewer. Sometimes it is wrongly rendered. In the Ubuntu Gnome PDF viewer *Evince* it is displayed as *overline*.

### <a name="createsquiggly"></a>createSquigglyAnnotation(...)

Uses a curly line for underlining a selected text.

![ Example of a squiggly annotation](./documentation/SquigglyAnnotation.png  "Example of a squiggly annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   Rectangle defining the size and the position of the annotation. The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the rectangle.  If you specify the quadPoints array you can also hand over an empty list. The library takes the convex hull of your quadpoint definitions. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|
| quadPoints | number array | Optional argument for specifying the quadpoints of the annotation (cfg. [Quadpoints](#QuadPoints) ). |

### <a name="createstrikeout"></a>createStrikeOutAnnotation(...)

Can be used to cross out the selected text.

![ Example of a strike out annotation](./documentation/StrikeOutAnnotation.png  "Example of a strike out annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   Rectangle defining the size and the position of the annotation. The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the rectangle. If you specify the quadPoints array you can also hand over an empty list. The library takes the convex hull of your quadpoint definitions. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|
| quadPoints | number array | Optional argument for specifying the quadpoints of the annotation (cfg. [Quadpoints](#QuadPoints) ). |

### <a name="createfreetext"></a>createFreeTextAnnotation(...)

Creates a free text annotations. It puts a label at an arbitrary position. Notice that in particular the chrome PDF viewer and the Firefox PDF viewer are not able to render these annotations.

![ Example of a free text annotation](./documentation/FreeTextAnnotation.png  "Example of a free text annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   Rectangle defining the size and the position of the annotation. The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the text annotation. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createline"></a>createLineAnnotation(...)
Not yet implemented.

### <a name="createcircle"></a>createCircleAnnotation(...)

Adds a circle annotation to the document.

![ Example of a circle annotation](./documentation/CircleAnnotation.png  "Example of a circle annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the circle. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createsquare"></a>createSquareAnnotation(...)

Adds a square annotation to the document.

![ Example of a square annotation](./documentation/SquareAnnotation.png  "Example of a square annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the square. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createpolygon"></a>createPolygonAnnotation(...)

Adds a polygon as depicted in the following figure.

![ Example of a polygon annotation](./documentation/PolygonAnnotation.png  "Example of a polygon annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the square. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| vertices | number array |    \[x_1, y_1, ... , x_n, y_n\] the points building the polygon. |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createpolyline"></a>createPolyLineAnnotation(...)

Adds a polygon line as depicted in the following figure.

![ Example of a poly line annotation](./documentation/PolyLineAnnotation.png  "Example of a poly line annotation")

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| page |  number | The page number where the annotation must be added (starting with 0)|
| rect  |   number array   |   The format is \[x_1, y_1, x_2, y_2 \], what defines the upper left and the lower right corner of the square. |
| contents | string |  The annotation text  |
| author | string |    The author name.  |
| vertices | number array |    \[x_1, y_1, ... , x_n, y_n\] the points building the polygon. |
| color | object |   Of type `{ r : <r>, g : <g>, b : <b> }`. Values can be either in the range (0 - 255) or (0 - 1). Specifies the color of the annotation.|

### <a name="createstamp"></a>createStampAnnotation(...)
Not yet implemented.

### <a name="createcaret"></a>createCaretAnnotation(...)
Not yet implemented.

### <a name="createink"></a>createInkAnnotation(...)
Not yet implemented.

### <a name="createpopup"></a>createPopupAnnotation(...)
Not yet implemented.

### <a name="getAnnotations"></a>getAnnotations()

Returns the annotations that originally exist in the PDF document and those that were created by the library in the mean time. The return values is a list of lists, where every list represents one page in the pdf document.

### <a name="write"></a>write(...)

Appends the created annotations to the PDF file and returns the complete file encoded as *Int8Array*.

### <a name="download"></a>download(...)

The download method allows the download of the adapted PDF document in the browser.

#### Parameters:
| Paramater   |     Type      |  Description |
|----------|-------------|------|
| fileName | string |  Specify a file name of the download file. By default it is called 'output.pdf'. |

# <a name="HowWorks"></a>How does the Library Works?

## <a name="Trivia"></a>Trivia

The annotation of PDF documents is an awesome feature that I really appreciate. Although there exists a number of javascript PDF viewer libraries, as for instance *pdfjs*, those do not support the creation of annotations. There exists the library [pdf-annotate.js](https://github.com/instructure/pdf-annotate.js/) an interesting annotation solution that introduces an additional layer for creating annotations on top of the PDF document. For storing these annotations a storage adapter must be provided. Instead of storing the annotations separated from the actual PDF document file I prefer storing the annotations directly in the PDF file. Otherwise these annotations are only visible in dedicated viewer application.

I started the journey by diving into the pdfjs library. I managed to create annotations that are visible on the viewing area, but noticed a bit late that pdfjs does not provide any sort of pdf writer. So it is only one step to extend the pdfjs library by an annotation that is correctly positioned with all the styles applied, but an entirely different step to write these information into a valid PDF document.

So I tried to employ different javascript pdf writer libraries, as *pdfkit*, *pdfmake* or *jspdf*, to create a new PDF document by going through the pdfjs PDF datastructure and write all the objects of the PDF document into the datastructures of the writer libraries. Since my plan was to use this functionality in a browser within the angular framework I failed in using pdfkit and pdfmake. *jspdf* on the other hand seemed to work. The only problem was that it was not able to parse CFF based fonts and after diving a few days into the opentype font specification and some implementations that were able to convert CFF fonts into TTF outlined fonts I decided that there must be a simpler way. Additionally I figured that the font problem would not be the last problem, when trying to clone a PDF document from a more highlevel datastruture. A PDF document can comprise a lot of different data.

Finally I stumbled over the **Updating** section in the PDF specification. Generally speaking it is possible to add annotations by just appending them to the end of the PDF file. Furthermore it is possible to delete or edit existing annotations. I decided that this might be the best way to implement the annotation of PDF documents in a javascript context.

## <a name="AddingAnnotation"></a>Adding an Annotation

In the following I describe the function of the library on a high level. We assume that the PDF document was loaded entirely and the data stream is available.

**Procedure:**
1. An annotation is created
2. The latest update of **Page** object must be fetched to check, whether there exists an **Annots** field in the object definition
3. If there is no **Annots** field it must be added and a reference to a list must be added that holds the references to the annotations of the page
4. We need to append one or two new object to the PDF document: One object that represents the newly created annotation and if necessary one object representing the list of annotations of a page, in case the corresponding page does not have an **Annots** field yet.
5. For this we need unique object identifiers (see [PDF Objects](#PDFObjects)). There are two ways to identify *new* object numbers in a PDF document. Either by using an existing but freed object identifier or by creating a new one by incrementing the last used object identfier.
6. After adding the objects and updating the **Annots** array the cross reference table must be created and attached to the file data
7. Finally we need some way to download or process the modified file

We can conclude: for creating an annotation we need the following informations:
- a free object id (new or reused) for creating the annotation object
- the address of the annotation field or to the page object, if the annotation field does not exists yet. In this case we also need a free object id for the new annotation list
- the last update section for handling the references and the cross reference table

From [Document updates](#DocumentUpdates) we learned that we can use the cross reference table for efficiently reading the necessary objects and information from PDF documents.

### <a name="DocumentUpdates"></a>Document Updates

A newly created PDF document closes with three sections: *Body update*, *Cross-reference section* and *Updated Trailer*. When the PDF document is updated, that means manipulated by for instance adding an annotation, another triplet of a *Body update*, *Cross-reference section* and *Updated Trailer* is attached to the end of the file. These sections contain jump addresses that allow an efficient traversal through the PDF document. So by reading the last update section we can go backwards and read all the information without the need of consuming outdated (already updated) information.

To understand how such an update section works let us consider the following example:

```
7 0 obj [6 0 R 8 0 R ] endobj
8 0 obj <</Type /Annot /Rect [77.7777777778 83.7931904161 83.7777777778 89.7856242119 ] /Subtype /Text /M (D:20190101154225) /T (max) /Contents (Pop up note) /NM (okular) /F 4 /C [1 1 0 ] /CA 1 /Border [0 0 1 ] /P 3 0 R >> endobj
xref
0 1
0000000001 65535 f
7 2
0000001321 00000 n
0000001352 00000 n
trailer
<</Size 9 /Root 1 0 R /Prev 1150 >>
startxref
1648
%%EOF
```

The first part contains the body update. In this example the objects *7* and *8* are updated. Thereby the object *7* represents the list of annotations of a certain page. This list is extended by another new annotation defined in object *8*.

The next part starting with the *xref* keyword represents the *cross-reference section*. The cross-reference section can be devided into sub sections that are always separated by the two numbers, which are again separated by a blank. So in the example, we have two subsections one starting with **0 1** and one starting with **7 2**. The first number represents the object id of the first referenced object and the second the number of references contained in subsection. So in the subsection starting with **7 2** we know that the first entry refers to the object with id *7* and has two entries. The second entry than refers to an object with id **8**.

If there is a gap in the consecutive enumeration of updated objects a new subsection is created that starts with the id of the first updated object in a consecutive row of updated objects. In this way uninvolved objects must not be mentioned in the table.

Let us now consider the structure of the subsection entries. It starts with a pointer to the object locations. So for instance in the entrie **0000001321 00000 n** the number 0...01321 represents the number of the byte in the document where the object with id *7* is defined. The second number in this case **00000** represents the *generation* number of the object. That is an indication of how often the corresponding object id was reused. An object can be freed. The object id becomes available again and can be reused. To mark an object id that had been reused the generation number is used. (see [PDF Objects](#PDFObjects) for more information). The third part of a subsection entry is an **n** or an **f**. **f** marks an object as freed, that means its object id can be reused, while **n** indicates the creation of a new object or the update of an existing object.

There is an additional particularity when freeing an object: The first number in the subsection entry represents then the address of the last free object. So we build a linked list of freed objects. This also explains the existance of the entry with object id **0**, which represents the head of the linked list of freed entries. **65535** represents the maximum generation number. The generation number of a freed object is the generation number of the object that is newly created and reuses the object id.

The last part of the update section contains the file trailer. It starts with the keyword trailer and is followed by the trailer dictionary. The trailer dictionary has commonly three sections: The **Root** key refers to the catalog dictionary object of the PDF document, the **Prev** key points to the previous cross reference section. This entry does not exists in the first document trailer, which marks the start of the document update history. The **Size** key contains the total number of entries in the cross-reference table with respect to the complete update history. So for instance in the example we have a size of *9*, which means that the complete cross-reference table (covering the total history) has 8 objects. In the body update section we created the object with id *8*, thus together with the 0'th object we have *9* objects maintained by the table. This number will always increment when using a new object id. It can also be used to easily identify the newest object id.

The last part of the trailer starts with the keyword **startxref** and than the position of the **xref** keyword. This represents the byte poisiton of the cross reference table start.

### <a name="PDFObjects"></a>PDF Objects

A PDF document consists of an arbitrary number of objects. These objects have different purposes. A page object is the logic representation of a physical PDF page, a root object is the start position of the document top-down traversal, there are also content objects, and a great variety of other types.

What all these objects have in common is how they are identified and referenced. An object reference consists of a number representing an **object id** and a **generation**. An exemplary object definition is given in the following:

```
3 0 obj
...
endobj
```

Here the object has id *3* and generation *0*. So what is this generation value? The PDF specification allows the reusing of object ids. If there was once an object with id *3*, but then it was freed, its id can be reused at the next update as a unique id for a new object. To differentiate the original object and the object that uses the reused id there exists the *generation* field. It is incremented for every reuse of the id.

When referencing an object we need to provide the object id, as well as the generation to unambiguously identify a certain object. To reference the introduced example object we write:
```
3 0 R
```
