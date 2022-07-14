### Table of Contents
1. [Intro to Algorithm Design](#Chapter-1-Intro-to-Algorithm-Design)
2. [Algorithm Analysis](#Chapter-2-Algorithm-Analysis)
3. [Data Structures](#Chapter-3-Data-Structures)
4. [Sorting and Searching](#Chapter-4-Sorting-and-Searching)

 <hr /> 

### Chapter 1 Intro to Algorithm Design 

***Goal - Extract the lessons about how to find counter examples, prove correctness and leverage induction***

- An algorithm is a procedure to accomplish a specific task 
- An algorithm is a procedure that takes any of the possible input instances and transforms it to the desired output
- There are three desirable properties for a good algorithm: correct, efficient, easy to implement
- These goals may not be simultaneously achievable. In industrial settings, any program that seems to give good enough answers without slowing the application down is often acceptable, regardless of whether a better algorithm exists. 
- The issue of finding the best possible answer or achieving maximum efficiency usually arises in industry only after serious performance or legal troubles.
- An algorithm is specified by describing the complete set of instances it must work on and of its output after running on one of  these  instances. 

**Example** <br>
Problem: Sorting <br>
Input: A Sequence of n keys  a1,...,an <br>
Ouput: The permutation (reordering) of the input sequence such that a′1 ≤ a′2 ≤ ···≤ an−1 ≤ an

- An instance of sorting might be an array of names, like {Mike, Bob, Sally, Jill, Jan}, or a list of numbers like {154, 245, 568, 324, 654, 324}

**Heuristic**
- Heuristics in computer science and artificial intelligence are “rules of thumb” used in algorithms to assist in finding approximate solutions to complex problems
- Because heuristics are based on individual rules unique to the problem they are solving, the specifics of the heuristics vary from problem to problem
- Heuristics aim to produce solutions in a reasonable time frame that are good enough for solving the problem at hand
- The solution produced using a heuristic may not be the perfect or exact solution, but it’s valuable as an approximate or best-guess solution
- Some problems would require hundreds of thousands of years for an exact answer, but we can product an approximate solution almost instantly

***Heuristic Trade-Offs***
- Optimality: Many problems have multiple solutions, for example, “what is a good path to get from city A to city B? Do we need the best path, or will a good path be good enough?
- Completeness: When there are multiple valid solutions to a problem do we need to find all of them? Will a subset of valid solutions suffice?
- Accuracy: Many questions don’t have a correct answer. For example, “Will Tommy like a pair of boots or a pair of gloves for Christmas?” A hueristic can improve accuracy in these situations <br>
- Execution time: The primary goal of a heuristic is to provide a quick answer that’s good enough

-  There is a fundamental difference between algorithms, which always produce a correct result, and heuristics, which may usually do a good job but without providing any guarantee
- Reasonable-looking algorithms can easily be incorrect 
- Algorithm correctness is a property that must be carefully demonstrated

**Proofs**
- We need tools to distinguish correct algorithms from incorrect ones, the primary one of which is called a proof
- A proper mathematical proof consists of several parts:
- First, there is a clear, precise statement of what you are trying to prove 
- Second, there is a set of assumptions of things which are taken to be true and hence used as part of the proof 
- Third, there is a chain of reasoning which takes you from these assumptions to the statement you are trying to prove. 
- Finally, there is a little square ( ) or QED at the bottom to denote that you have finished, representing the Latin phrase for “thus it is demonstrated

- The heart of any algorithm is an idea. If your idea is not clearly revealed when you express an algorithm, then you are using too low-level a notation to describe it

**Problems and Properties**
- We need more than just an algorithm description in order to demonstrate correctness
- We also need a careful description of the problem that it is intended to solve
- Problem specifications have two parts: 
(1) the set of allowed input instances
(2) the required properties of the algorithm’s output. 

- It is impossible to prove the correctness of an algorithm for a fuzzily-stated problem
- Put another way, ask the wrong problem and you will get the wrong answer.

- An important and honorable technique in algorithm design is to narrow the set of allowable instances until there is a correct and efficient algorithm 
- For example, we can restrict a graph problem from general graphs down to trees, or a geometric problem from two dimensions down to one

**Counter Examples**
- The best way to prove that an algorithm is incorrect is to produce an instance in which it yields an incorrect answer 
- Such instances are called counter-examples, and they have 2 important properties:
- Verifiability – To demonstrate that a particular instance is a counter-example to a particular algorithm, you must be able to (1) calculate what answer your algorithm will give in this instance, and (2) display a better answer so as to prove the algorithm didn’t find it.
Since you must hold the given instance in your head to reason about it, an important part of verifiability is. . .
- Simplicity – Good counter-examples have all unnecessary details boiled away. They make clear exactly why the proposed algorithm fails. Once a counter- example has been found, it is worth simplifying it down to its essence
- Searching for counterexamples is the best way to disprove the correctness of a heuristic
- Techniques for finding  counter examples: 
- Think small – Note that the robot tour counter-examples I presented boiled down to six points or less, and the scheduling counter-examples to only three intervals. This is indicative of the fact that when algorithms fail, there is usually a very simple example on which they fail. Amateur algorists tend to draw a big messy instance and then stare at it helplessly. The pros look carefully at several small examples, because they are easier to verify and reason about
- Think exhaustively – There are only a small number of possibilities for the smallest nontrivial value of n. For example, there are only three interesting ways two intervals on the line can occur: (1) as disjoint intervals, (2) as overlapping intervals, and (3) as properly nesting intervals, one within the other. All cases of three intervals (including counter-examples to both movie heuristics) can be systematically constructed by adding a third segment in each possible way to these three instance
- Hunt for the weakness – If a proposed algorithm is of the form “always take the biggest” (better known as the greedy algorithm), think about why that might prove to be the wrong thing to do. In particular, . . .
- Go for a tie – A devious way to break a greedy heuristic is to provide instances where everything is the same size. Suddenly the heuristic has nothing to base its decision on, and perhaps has the freedom to return something suboptimal as the answer
- Seek extremes – Many counter-examples are mixtures of huge and tiny, left and right, few and many, near and far. It is usually easier to verify or rea- son about extreme examples than more muddled ones

- Mathematical induction is usually the right way to verify the correctness of a recursive or incremental insertion algorithm
Mathematical summation formulae arise often in algorithm analysis
- Further, proving the correctness of summation formulae is a classic application of induction
- Recognizing two basic classes of summation formulae will get you a long way
in algorithm analysis:
- Arithmetic progressions
- Geometric series

**Modeling**
- Modeling is the art of formulating your application in terms of precisely described, well-understood problems. Proper modeling is the key to applying algorithmic design techniques to real-world problems
- Proper modeling can eliminate the need to design or even implement algorithms, by relating your application to what has been done before
- Most algorithms are designed to work on rigorously defined abstract structures such as permutations, graphs, and sets
- To exploit the algorithms literature, you must learn to describe your problem abstractly, in terms of procedures on fundamental structures
- Make sure that you model the problem correctly before trying to solve it

**Combinatorial  Objects**
- To find out what is known about your algorithmic problem, you need to formuate your problem in terms of computing properties of common structures such as:

- Permutations – which are arrangements, or orderings, of items. For example, {1, 4, 3, 2} and {4, 3, 2, 1} are two distinct permutations of the same set of four integers. We have already seen permutations in the robot optimization prob- lem, and in sorting. Permutations are likely the object in question whenever your problem seeks an “arrangement,” “tour,” “ordering,” or “sequence” <br>
- Subsets – which represent selections from a set of items. For example, {1, 3, 4} and {2} are two distinct subsets of the first four integers. Order does not matter in subsets the way it does with permutations, so the subsets {1, 3, 4} and {4, 3, 1} would be considered identical. We saw subsets arise in the movie scheduling problem. Subsets are likely the object in question whenever your problem seeks a “cluster,” “collection,” “committee,” “group,” “packaging,” or “selection” <br>
- Trees – which represent hierarchical relationships between items. Trees are likely the object in question whenever your problem seeks a “hierarchy,” “dominance relationship,” “ancestor/descendant relationship,” or “taxonomy”<br>
- Graphs – which represent relationships between arbitrary pairs of objects. Graphs are likely the object in question whenever you seek a “network,” “circuit,” “web,” or “relationship” <br>
- Points – which represent locations in some geometric space. For example, the locations of McDonald’s restaurants can be described by points on a map/plane. Points are likely the object in question whenever your problems work on “sites,” “positions,” “data records,” or “locations.”<br>
- Polygons – which represent regions in some geometric spaces. For example, the borders of a country can be described by a polygon on a map/plane. Polygons and polyhedra are likely the object in question whenever you are working on “shapes,” “regions,” “configurations,” or “boundaries”<br>
- Strings – which represent sequences of characters or patterns. For example, the names of students in a class can be represented by strings. Strings are likely the object in question whenever you are dealing with “text,” “characters,” “patterns,” or “labels”

- The act of modeling reduces your application to one of a small number of existing problems and structures
- Such a process is inherently constraining, and certain details might not fit easily into the given target problem 
- Also, certain problems can be modeled in several different ways, some much better than others
- Modeling is only the first step in designing an algorithm for a problem
- Be alert for how the details of your applications differ from a candidate model, but don’t be too quick to say that your problem is unique and special
- Temporarily ignoring details that don’t fit can free the mind to ask whether they really were fundamental in the first place
- Modeling your application in terms of well-defined structures and algorithms is the most important single step towards a solution

**Recursiveness**
- Learning to think recursively is learning to look for big things that are made from smaller things of exactly the same type as the big thing
- Recursive descriptions of objects require both decomposition rules and basis cases, namely the specification of the smallest and simplest objects where the de-composition stops
- These basis cases are usually easily defined
- Recursive structures occur everywhere in the algorithmic world
- Each of the abstract structures described above can be thought about recursively <br>
**Examples** <br>
- Permutations – Delete the first element of a permutation of {1, . . . , n} things and you get a permutation of the remaining n − 1 things. Permutations are recursive objects <br>
- Subsets – Every subset of the elements {1,...,n} contains a subset of {1, . . . , n − 1} made visible by deleting element n if it is present. Subsets are recursive objects. <br>
- Trees – Delete the root of a tree and what do you get? A collection of smaller trees. Delete any leaf of a tree and what do you get? A slightly smaller tree. Trees are recursive objects. <br>
- Graphs – Delete any vertex from a graph, and you get a smaller graph. Now divide the vertices of a graph into two groups, left and right. Cut through all edges which span from left to right, and what do you get? Two smaller graphs, and a bunch of broken edges. Graphs are recursive objects <br>
- Points – Take a cloud of points, and separate them into two groups by drawing a line. Now you have two smaller clouds of points. Point sets are recursive objects. <br>
- Polygons – Inserting any internal chord between two nonadjacent vertices of a simple polygon on n vertices cuts it into two smaller polygons. Polygons are recursive objects. <br>
- Strings – Delete the first character from a string, and what do you get? A shorter string. Strings are recursive objects.
<br>
<br>

**Summary**
- An algorithm is a set is a set of steps that will produce a desired outcome based on input, which can be a set of different instances
- Heuristics can be used as a rule of thumb in algorithms to get an estimation for a 'good enough' answer, aka approximate solutions to complex problems 
- Heuristics have trade-offs and aren't guaranteed to always produce an accurate result 
- We also need tools to distinguish correct algorithms from incorrect ones:
- The primary one of which is called a proof (a chain of reasoning)
- Counter examples 
- Before trying to solve a problem, we need to fully understand that the problem is asking and model the problem to a data structure

 <hr /> 

### Chapter 2 Algorithm Analysis

- 2 most important tools that enable us to compare efficiency of algorithms without implementing them are: 
    - The Ram Model 
    - The asymptotic analysis of worse-case complexity

**2.1 The Ram Model of Computation**
- machine independent algorithm design depends on a hypothetical computer called the ***Randon Access Machine** or ***RAM**
- in this hypotehtical computer: 
    - each simple operation (+, *, -, =, if, call) takes exactly one time step 
    - loops and subroutines are not considered simple operations (loops and subroutines are made up of many simple operations)
    - each memory access takes exactly one time step, but we have as much memory as we need in the RAM model
    - using this model, algos can be understood and studied in a langurage and machine independent matter 

**2.1.1 Best, Worst, and Average-Case Complexity** 
- worst-case complexity proves to be most the useful measure
- each time complexity defines a numerical function, representing time vs. problem size

**Asymptotic Notation**
- Asymptotic Notation is used to describe the running time of an algorithm - how much time an algorithm takes with a given input, n
- There are three different notations: big O, big Theta (Θ), and big Omega (Ω)
- big-Θ is used when the running time is the same for all cases
- big-O for the worst case running time 
- big-Ω for the best case running time

**2.2 The Big Oh Notation** 
- The Big Oh simplifies our analysis by ignoring levels of detail that do not impact out comparison of algos
- For functions, we can define the: 
    - worst-case complexities: the max # of steps taken in any instance of size n
    - base-case complexity: the min # of steps taken in any instance of size n 
    - average-case complexity: the average # of steps over all innstances of size n

**Formal Notations of Big Oh**
The formal definitions associated with the Big Oh notation are as follows:
```
O 
- f(n) = O(g(n)) means c · g(n) is an upper bound on f (n). Thus there exists some constant c such that f (n) is always ≤ c · g(n), for large enough n (i.e. , n ≥ n0 for some constant n0). 

Theta
- f(n) = Ω(g(n)) means c · g(n) is a lower bound on f(n). Thus there exists some constant c such that f(n) is always ≥ c · g(n), for all n ≥ n0.

Omega
- f(n) = Θ(g(n)) means c1 · g(n) is an upper bound on f(n) and c2 · g(n) is a lower bound on f(n), for all n ≥ n0. Thus there exist constants c1 and c2 such that f (n) ≤ c1 · g(n) and f (n) ≥ c2 · g(n). This means that g(n) provides a nice, tight bound on f(n).
```

**Big  Oh Examples**
- 3n² − 100n + 6 = O(n²), because I choose c = 3 and 3n² > 3n² − 100n + 6
- 3n² − 100n + 6 = O(n³), because I choose c = 1 and n³ > 3n² − 100n + 6 when n > 3
- 3n²−100n+6 !=O(n),because for any c I choose c×n < 3n² when n>c

- all we need to do is find a constant that works with n to make it true
- usually we ignore 0 and 1 because we only care about how growth happens with lage n's and different constants
- we say that a faster-growing function dominates a slower-growing one, just as a faster-growing country eventually comes to dominate the laggard. When f and g belong to different classes (i.e., f(n) ̸= Θ(g(n))), we say g dominates f when f(n) = O(g(n)), sometimes written g ≫ f

**2.4 Working with the Big Oh**
O(f (n)) + O(g(n)) → O(max(f (n), g(n)))
Ω(f (n)) + Ω(g(n)) → Ω(max(f (n), g(n)))
Θ(f (n)) + Θ(g(n)) → Θ(max(f (n), g(n)))
If f(n) = O(g(n)) and g(n) = O(h(n)), then f(n) = O(h(n)).

example - Suppose f(n) = O(n2) and g(n) = O(n2). This implies that f(n) + g(n) = O(n2) as well.

**YouTube Lecture 2 Notes**

Big O - upper bound<br>
- when we say that a function f(n) is Big O g(n), what we mean is that g(n) is an upper bound of f(n) - meaning there is something (c) you multiply f(n) by  so  that: 
    - f(n) O(g(n))
    - f(n) < g(n) --> our function f(n) is upper bounded by c * g(n)

Theta - lower bound<br>
- f(n) is always lower bounded by g(n) / c * g(n)

Omega - tight bound<br>
- c1 * g(n) is upper bound
- c2 * g(n) is lower bound

- constant is what makes a function lower vs upper bound

- we are interested in behavior of functions as n gets very big, going out to infinity
- when we look at definitions, implicitly it is OK if there is a constant and zero, a small value such as the relationship doesn't hold before No
- i.e if something is Big O O(g(n)) that means the upper bound relation holds for all  values greater than No 

**2.3 Growth Rate and Dominance Relations**
- with Big O, we discard multiplicative constants

**2.3.1 Dominance Relations**
**Complexity of algorithms**
- Constant f(n) = 1
- Logarithmic f(n) = log n. binary search
- Linear f(n) = n
- Superlinear f(n) = n lg n. quick sort, merge sort
- Quadratic f(n) = n²
- Cubic f(n) = n³. Such functions enumerate through all triples of items in an n-element universe
- Exponential f(n) = c^n. Functions like 2^n arise when enumerating all subsets of n items.
- Factorial f(n) = n!. Functions like n! arise when generating all permutations or orderings of n items

**2.4.2 Multiplying Functions**
- Multiplying a function by a constant can not affect its asymptotic behavior, because we can multiply the bounding constants in the Big Oh analysis of c · f(n) by 1/c to give appropriate constants for the Big Oh analysis of f(n).
Examples

- O(c · f(n)) → O(f(n))

- O(f(n)) * O(g(n)) → O(f(n) * g(n))
- Reasoning: If I'm doing at most f(n) things and  at most they each  take g(n) time, then it will be f(n) * g(n)

- Problem: Show that Big Oh relationships are transitive. That is, if f(n) = O(g(n)) and g(n) = O(h(n)), then f(n) = O(h(n))

- f(n) ≤ c1g(n) for n > n1  // there is a constant (c1) that makes c1g(n) greater for n > n1
- n1      n = n > n1 

- c1g(n) ≤ c2h(n) for n > n2  // there is a constant (c2) that makes c1h(n) greater for n > n2
- n2        n  = n > n2 

- f(n) ≤ c2c3h(n) for n > n3 (max(n1, n2))  // there is a constant (c2 * c3) that makes c2c3h(n) greater for n > n3
n3        n = max(n1, n2) 

**2.5.1 Selection Sort**
- selection sort algorithm - repeatedly identifies the smallest remaining unsorted element and puts it at the end of the sorted portion of the array

```js
function selectionSort(arr) {
    for(i = 0; i < arr.length; i++) { // outer loop goes around n times
        let min =  i
        for(j = i + 1; j < arr.length; j++) { // inner loop goes around n - i - 1 times
            if(arr[j] < arr[lowest]) { 
                lowest = j
            }
            arr[i], arr[lowest] = arr[lowest], arr[i]
        }
    }
    return arr
}
```
**this represents the exact times the if statement is executed** <br>
![screenshot of summation notation](/algorithm_design_manual_book/notes-screenshots/summation-selection-sort.png)

- this summation is the equivalent of 
S(n) = (n - 1) + (n - 2) + (n - 3) + . . .  2 + 1

- another way to think about it is, we are adding up n - 1 terms whose average is 
S(n) = n(n -1) / 2

- in terms of upper and lower bounds, we have n terms at most, each of which is n - 1 
- S(n) <= n(n-1) = O(N2) 

- **Selection Sort is Quadratic**

**2.5.2 Selection Sort**

```js
for(i = 0; i < n; i++) {
    j = 1;
    while((j > 0) && (s[j] < s[j-1])) {
        swap(&s[j], &s[j-1]);
        j = j - 1;
    }
}
```

```
Example Iteration

[12,11,13,5,6]

[11,12,13,5,6]

[11,12,5,13,6]

[11,5,12,13,6]

[5,11,12,13,6]

[5,11,12,6,13]

[5,11,6,12,13]

[5,6,11,12,13]

```
- basic rule of thumb in Big O analysis is that worst-case running time follows from multiplying the largest number of times each nested loop can iterate

- How many times does the while loop occur? 
    - two different stopping conditions for while loop above 
         - one  to prevent us from running out of bounds of the array 
         - the other is to mark when the element finds the proper place in the sorted order
    - worst case analysis seeks  an upper bound on the running time, so we can just assume it always gets around n times 
- we can round up to Quadratic time i.e O(N2)

**2.5.3 String Pattern Matching**
- worst case is O(nm)

**2.5.3 Matrix Multiplication**
- 3 level for loop, a cubic algorithm, not optimal


**2.6. Logarithms and Their Multiplication**

- A logarithm is an inverse exponential function 
- Logarithms arise in any process where things are repeatedly halved

```
Example

2 * 2 * 2 = 8

3 is the logarithm of 8 to base 2, or 3 = log2 8.

```
**2.6.1 Binary Search**
- Binary Search is a good example of an O(logn) algo
- The number of steps the algo takes equals the number of times we can halve n until only one item is left
- these algos are fast  enough to be used on problem instances of essentially unlimited size

**2.6.2 Logarithms and Trees**
- we can use logarithms to evaluate how many leaf nodes + leaves a binary tree can half because leaf nodes double in size based on the height of the tree

**2.6.3 Logarithms and Bits**
- we can use logarithms to know how many w bits we need to represent any one of n different possibilites 

**2.6.4 Logarithms and Multiplication**
- the log of a product is the sum of the logs 

**2.6.7 Logarithms and Summations**
- using harmonic numbers can reduce complexity, i.e quicksort
![screenshot of harmonic numbers](/algorithm_design_manual_book/notes-screenshots/harmonic-numbers.png)

**2.7 Properties of Logarithms**
- b * b * b (b to the third power) is equivalent to x = lob b y 
- b is known as the base of the logarithm 
- 3 bases to know
    - Base b = 2 - The Binary Logarithm 
        - usually denoted  lg x, is a base 2 algo
        - this base arises whenever repeated halving (ie binary search) or doubling (ie nodes in trees) occurs 
        - most algorithmic applications of logarithms imply binary logarithms

    - Base b = e - The Natural Log 
        - usually denoted lg x, is a base e = 2.71828...logarithm 
        - the inverse of ln x is exponential function exp(x) = e to the x power on a calculator 
        - composing these functioins gives us exp(ln x) = x

    - Base b = 10 - common logarithm (but actually not as common anymore)
        - usually denoted  as log x 

- log a(xy) = loga(x) + loga(y)
- we can also convert a logarithm from one base to another using:
    - logaB = logcB / logcA
- the base of the logarithm has no real impact on growth rate 
- logarithms cut any function down to size - the growth rate of the logarithm of any polynomial function is O(lg n) b/c logaN to the b power = b * logaN

- take away - power of binary search comes from its logarithmic complexity, not the base of the log 

**2.9.2 Limits and Dominance Relations**
    
- when considering functions made up of the sums, differences, products or quotients of different sorts of functions (polynomials, exponentials and logarithms), or different powers of the same sort of function we  say that one function dominates the other
- this means that as x approaches infinity or negative infinity, the graph will eventually look like the dominating function.

- Exponentials dominate polynomials,
- Polynomials dominate logarithms,
- Among exponentials, larger bases dominate smaller,
- Among polynomials, higher powers dominate lower,
- here’s an example that pretty much has to be done using the dominance approach:

![screenshot of dominance example](/algorithm_design_manual_book/notes-screenshots/dominance.png)

- The polynomial function in the denominator, even with the very small exponent, will dominate the logarithm function
- The denominator will eventually get larger than the numerator and drive the quotient towards zero
- We will return to this function when we know about finding maximums and points of inflection and find where it starts decreasing

**War Story**
- you're more likely to increase efficiency by tweaking and improving your algorithm, rather than using a super computer, epsecially when you have a huge amount of values

### Chapter 3 Data Structures

**3.1 Contigous vs. Linked Data Structures**
- data structures can be classified as ***contigous*** or ***linked***, depending on whether they are based on arrays or pointers: 
    -  ***Contiguously-Allocated Structures*** - composed of single slabs of memory, and includes arrays, matrices, heaps, hash tables
    - ***Linked Data Structures*** - composed  of distinct chunks of memory bound together by pointers, and includes lists, trees, graph adjacency lists

**3.1.1 Arrays**
- type: Contiguously-Allocated Structure
- arrays are structures of fixed-size data records such that each element can be efficiently located by its index 
- advantages
    - **Constant-time access given the index** – because the index of each element maps directly to a particular memory address, we can access data items instantly (if you know the index)
    - **Space efficiency** – arrays consist purely of data, so no space is wasted with links or other formatting information
    -  also we don't need end-of-record information because arrays are built from fixed-size records 
    - **Memory locality** – arrays are great to iterate over because of excellent memory locality
    - physical continuity between successive data accesses helps us use the high-speed cache memory on modern computer architectures

- downside 
    - we can't adjust array size in the middle of a program's execution 

- workaround 
    - we can enlarge arrays using ***dynamic arrays** 
    - ***dynamic arrays** advantages
        - randon access to elements O(1)
        - good locality of reference and data
        - easy to insert/delete at the end
    - ***dynamic arrays** disadvantages
        - wastes memory space
        - shifting elements is time consuming O(n)
        - expanding / shrinking array is time consuming O(n)
        - primary thing lost using dynamic arrays is the guarantee that each array access takes constant time in the worst case
        - all the queries will be fast, except for those relatively few queries triggering array doubling
        - what we get instead is a promise that the nth array access will be completed quickly enough that the total effort expended so far will still be O(n)

    **3.1.2 Pointers and Linked Structures**
    - type: Linked Data Structures
    - pointers are the connections that hold the pieces of linked structures together
    - pointers represent the address of a location in memory
    - A variable storing a pointer to a given data item can provide more freedom than storing a copy of the item itself (i.e a cell phone pointing to its owner as they travel)
    - all linked data structures share certain properties, as revealed by the following linked list type declaration:
```js
    typedef struct list { 
                  item_type item; /* data item */
                  struct list *next; /* point to successor */
    } list;
```

   - each node in our data structure (here list) contains one or more data fields
(here item) that retain the data that we need to store
  - each node contains a pointer field to at least one other node (here next)
  - this means that much of the space used in linked data structures has to be devoted to pointers, not data
  - finally, we need a pointer to the head of the structure, so we know where to access it

  - the list is the simplest linked structure
  - The three basic operations supported by lists are **searching**, **insertion**, and **deletion**
  - in doubly-linked lists, each node points both to its predecessor and its successor element - this simplifies certain operations at a cost of an extra pointer field per node

**Searching a List**
    - searching for item x in a linked list can be done iteratively or recursively
    - if done recursively, it is either the first element or located in the smaller rest of the list 
    - if not in the list, we reduce the problem to searching in an empty list

```js
list *search_list(list *l, item_type x) {
        if (l == NULL) return(NULL);
if (l->item == x) return(l);
else }
return( search_list(l->next, x) );
```

**Intersion into a List**
-s ince we have no need to maintain the list in any particular order, we might as well insert each new item in the simplest place
- insertion at the beginning of the list avoids any need to traverse the list, but does require us to update the pointer (denoted l) to the head of the data structure

**Deletion from a List**
- to delete, we need to find a pointer to the predecessor of the item to be deleted, which can be done recursively
- the predecessor is needed because it points to the doomed node, so its next pointer must be changed
- the actual deletion operation is simple, once ruling out the case that the to-be-deleted element does not exist
- sepecial care must be taken to reset the pointer to the head of the list (l) when the first element is deleted 

**3.1.3 Comparison**
- advantages of linked lists over static arrays:
    - overflow on linked structures can never  occur unless memory is actually full
    - insertions and deletions are simpler than for contiguous (array) lists
    - with large records, moving pointes is easier and faster than moving the items themselves 

- advantages of arrays include 
    - linked structures require extra space for storing pointer fields
    - linked lists do not allow efficient random access to items 
    - arrays allow  better memory locality  and cache performance than random pointer jumping 

- take-away
    - dynamic memory allocation providesus with flexibility on how and where we use our limited  storage resources 

- these fundamental structures can be through of as recursive objects: 
    - Lists
        -  chopping the first element off a linked list leaves a smaller linked list
        - this same argument works for strings, since removing characters from string leaves a string
        - lists are recursive objects
    - Arrays
        - splitting the first k elements off of an n element array gives two smaller arrays, of size k and n−k, respectively
        - arrays are recursive object

-  this insight leads to simpler list processing, and efficient divide-and-conquer algorithms such as quicksort and binary search

**3.2 Stacks and Queues**
- the term container denotes a data structure that permits storage and retrieval of data items independent of content
- by contrast, dictionaries are abstract data types that retrieve based on key values or content

- **Containers**
    - distingued by the  particular retrieval order they support
    - for the two most important types of containers, the retrieval ordeer depends on insertion order 
        - **Stacks** (LIFO)
            - support retrieval by last-in, first-out (LIFO) order 
            - stacks are simple to implement and very efficient
            -for this reason, stacks are probably the right container to use when retrieval order doesn’t matter at all, such as when processing batch jobs
            - the put and get operations for stacks are usually called push and pop:
                ```
                – Push(x,s): Insert item x at the top of stack s.
                – Pop(s): Return (and remove) the top item of stack s.
                ```
        - **Queues** (FIFO)
            - support retrieval in first in, first out (FIFO) order
            - ideal for when you want the container holding jobs to be processed in FIFO order to minimize the maximum time spent waiting
            - note that the average waiting time will be the same regardless of whether FIFO or LIFO is used
            - trickier to implement
            - most appropriate for applications (like certain simulations) where the order is important
            - the put and get operations for queues are usually called enqueue and dequeue
            ```
                – Enqueue(x,q): Insert item x at the back of queue q.
                – Dequeue(q): Return (and remove) the front item from queue q.
            ```
- stacks and queues can be effectively implemented using either arrays or linked lists
- the key issue is whether an upper bound on the size of the container is known in advance, thus permitting the use of a statically-allocated array

***3.3 Dictionaries**
- dictionary data type permits access to data items by content
- you stick an item into a dictionary so you can find it when you need it
- dictionary primary operations:

    ```
    • Search(D,k) – Given a search key k, return a pointer to the element in dictionary D whose key value is k, if one exists
    • Insert(D,x) – Given a data item x, add it to the set in the dictionary D
    • Delete(D,x) – Given a pointer to a given data item x in the dictionary D, remove it from D
    ```

- some dictionary data structures also support other useful operations: 
   • Max(D) or Min(D)
    - Retrieve the item with the largest (or smallest) key from D
    - This enables the dictionary to serve as a priority queue
   • Predecessor(D,k) or Successor(D,k)
    - Retrieve the item from D whose key is immediately before (or after) k in sorted order 
    - These enable us to iterate through the elements of the data structure
```
basic dictionary operations can be implemented with the following costs on unsorted and sorted arrays:

Dictionary             Unsorted  Sorted      
operation              Array     Array

Search(L, k)           O(n)      O(log n)
Insert(L, x)           O(1)      O(n)
Delete(L, x)           O(1)      O(n)
Successor(L, x)        O(n)      O(1)
Predecessor(L, x)      O(n)      O(1)
Minimum(L)             O(n)      O(1)
Maximum(L)             O(n)      O(1)
```

- take-away
    - data structure design must balance all the different operations it supports
    - the fastest data structure to support both operations A and B may well not be the fastest structure to support either operation A or B
    - deletion is faster for sorted doubly-linked lists than sorted arrays, because splicing out the deleted element from the list is more efficient than filling the hole by moving array elements
   - the predecessor pointer problem again complicates deletion from singly-linked sorted lists

   **3.4 Binary Search Trees**
    - ***rooted binary tree*** is recursively defined as either being 
        - (1) empty OR
        - (2) consisting of a node called the root, together with two rooted binary trees called the left and right subtrees
    - the order among sibbling nodes matters in rooted trees, so left is different from right
    - ***binary search tree*** labels each node in a binary tree with a single key such that for any node labeled x, all nodes in the left subtree of x have keys < x while all nodes in the right subtree of x have keys > x
    - a Binary Tree is labeled if every node is assigned a label and a Binary Tree is unlabelled if nodes are not assigned any label
    - for any binary tree on n nodes, and any set of n keys, there is exactly one labeling that makes it a binary search tree
    - there are only 5 possible BSTs of 3 nodes

    **3.4.1 Implementing Binary Search Trees**
    - Binary tree nodes have left and right pointer fields, an (optional) parent pointer, and a data field

    ```js
        typedef struct tree { 
                item_type item; /* data item */
                struct tree *parent; /* pointer to parent */
                struct tree *left; /* pointer to left child */
                struct tree *right; /* pointer to right child */
        } tree;
    ```
    - basic operations supported by binary trees are searching, traversal, insertion, and deletion

***Seaching a Tree**
- the binary search tree labeling uniquely identities where each key is located
- start at the root unless it contains the query key x, proceed either left or right depending upon whether x occurs before or after the root key
- this algorithm works because both the left and right subtrees of a binary search tree are themselves binary search trees
- this recursive structure yields the recursive search algorithm below:

```js
    tree *search_tree(tree *l, item_type x) {
    if (l == NULL) return(NULL); 
    if (l->item == x) return(l); 
    if (x < l->item)
            return( search_tree(l->left, x) );
        else 
            return( search_tree(l->right, x) );
    }
```
***This search algorithm runs in O(h) time, where h denotes the height of the tree***

**Finding Minimum and Maximum Elements in a Tree**
- Implementing the find-minimum operation requires knowing where the minimum element is in the tree
- by definition, the smallest key must reside in the left subtree of the root, since all keys in the left subtree have values less than that of the root

    ```js
    tree *find_minimum(tree *t) {
    tree *min; /* pointer to minimum */
    if (t == NULL) return(NULL);
    min = t;
    while (min->left != NULL)
        min = min->left;
    return(min);
    }
    ```

    **Traversal in a Tree**
    - a prime application of tree traversal is listing the labels of the tree nodes
    - binary search trees make it easy to report the labels in sorted order
    - by definition, all the keys smaller than the root must lie in the left subtree of the root, and all keys bigger than the root in the right subtree
    - thus, visiting the nodes recursively in accord with such a policy produces an in-order traversal of the search tree:

    ```js
    void traverse_tree(tree *l) 
    {
        if (l != NULL) { 
            traverse_tree(l->left);
            process_item(l->item); 
            traverse_tree(l->right);
        }
    }
    ```

    - each item is processed once during the course of traversal, which runs in O(n) time, where n denotes the number of nodes in the tree.
    - alternate traversal orders come from changing the position of process item relative to the traversals of the left and right subtrees
    - processing the item first yields a pre-order traversal, while processing it last gives a post-order traversal
    - these make relatively little sense with search trees, but prove useful when the rooted tree represents arithmetic or logical expressions

    
**Insertion in a Tree**
- there is only one place to insert item x into a binary search tree T where we know we can find it again
- we must replace the NULL pointer found in T after an unsuccessful query for the key k
- this implementation uses recursion to combine the search and node insertion stages of key insertion
- the three arguments to insert_tree are 
    - a pointer 1 to the pointer linking the search subtree to the rest of the tree
    - the key x to be inserted 
    - a parent pointer to the parent node containing 1
- the node is allocated and linked in on hitting the NULL pointer  
- note that we pass the pointer to the appropriate left/right pointer in the node during the search, so the assignment *l = p; links the new node to the tree

```js
insert_tree(tree **l, item_type x, tree *parent)
{
    tree *p; /* temporary pointer */
    if (*l == NULL) {
        p = malloc(sizeof(tree)); /* allocate new node */
        p->item = x;
        p->left = p->right = NULL;
        p->parent = parent;
        *l = p; /* link into parent’s record */
        return;
}

if (x < (*l)->item)
    insert_tree(&((*l)->left), x, *l);
else
    insert_tree(&((*l)->right), x, *l);
}
```
***Deletion from a Tree**
- removing a node means appropriately linking its two descendant subtrees back into the tree somewhere else 
- leaf nodes have no children and may be deleted by cleaing the pointer to the given node
- if a node has one child, we can link the grandchiild directly to the parent without violating the in-order labeling property of the tree
- with nodes that havee two childreen, we relabeel this node with the key of its immediate successer in sorted order
- this successor could be the smallest value in the right subtree, specifically the left most descendant in the right subtree(p)
- moving this to the point of deletion results in a properly labeled binary search tree, and reduces our deletion problem to physically removing a node with at most one child
- worst case complexity is O(h) time because deleetion requirese the cost of at most two search operations (each costing O(h)) where h is the height of the tree, plus all the pointer manipulation 

**3.4.2 How Good are Binary Search Trees?**
- when implemented using binary search trees, all three dictionary operations take O(h), where h is the height of the tree
- the smallest height we can hope for occurs when the tree is perfectly balanced, h = [log n]
- bad things happen when we reply on insertion sort to build a tree
- on average, we can say tree will be  O(log n)
- quicksort is the fastest known sorting algorithm

**3.4.3 Balanced Search Trees**
- a better solution is an insertion/deletion procedure which adjusts the tree a little after insetion, which keeps it close enough to be balanced so the maximum height is logarithmic 
- sophisticated balanced binary search tree data structures have been developed that are O(log n)
- therefore all dictionary operations (insert, delete, query) take O(log n) time each 

// return to ***stop and think: exploiting balanced search trees***

**3.5 Priority Queues**
- priority queues are data structures that provide more flexibility than simple sorting, because they allow new elements to enter a system at arbitrary intervals 
- it's much more cost-effective to insert a new job into a priority queue than to re-sort everything onn each such arrival
- basic priority queue supports three primary operations:
    - ***Insert(Q, x)*** - given an item x with key k, insert it into the priority queue Q
    - ***Find-Maximum(Q) or Find-Maximum(Q)*** - return a pointer to the item whose key value is smaller (larger) than any other key in the priority queue Q
    - ***Delete-Minimum(Q) or Delete-Maximum(Q)*** - remove an item from the priority queue Q whose key is minimum (maximum)

***take-away**
- building algorithms around data structures such as dictionaries and priority queues leads to both clean structure and good performance 

```
Basic Priority Queue Implementations

                     Unsorted  Sorted  Balanced
                     Array     Array   Tree
Insert (Q,x)         O(1)      O(n)    O(log n)
Find-Minimum(Q)      O(1)      O(1)    O(1)
Delete-Minimum(Q)    O(n)      O(1)    O(log n)
```

**3.7 Hashing + Strings**
- hash tables are a very practical way to maintain a dictionary 
- they exploit the fact that looking up an itemm in an array takes constant time once you have its index
- hash function - mathematical function that maps keys to integers 
-
**3.7.1 Collision Resolution**
- we need to be prepared for collisions with hash functions because two distinct keys will occasionally hash to the same value 
- chaining is the easiest  approach to fix this  
- chaining devotes a lot of memory to pointers 
- this space could be used to make the table larger, hence the 'lists' smaller
- an alternative is called open addressing 
- hash table is maintained as an array of elements (not buckets), each initialized to  null 
- on insertion, we see if the desired position is empty, if so, we insert it
- if not, we need to find some other place to insert
- simplest possibility is sequential probing, which inserts the item in the next open spot  in the table
- now we can search for a given key using appropriate hash value and check to see if the item there is the one we want
- if so, return otherwise keep checking length of  the array 
- deletion in an open addressing scheme requires reinserting all of the  items in the run following the new hole 
- chaining and open addressing both require O(m) to initialize an m-element hash table to null  elements prior to the first insertion
- traversing all the elements in the hash tabletakes O(n + m) time for chaining, because we have to scan all the m buckets looking for elements, even if the actual number of inserted items is small
- this reduces to O(m) time for open addressing since n must be must be m at most  
- when using chaining with doubly-linked lists to resolve collisions in an m-element hash table, the dictionary operations for n items can be implemented in the following expected & worst case times 


```
                          Hash table     Hash table 
                          (expected)     (worst case)
Search(L, k)              O(n/m)         O(n)
Insert(L, x)              O(1)           O(1)
Delete(L, x)              O(1)           O(1)
Successor(L, x)           O(n + m)       O(n + m)
Predecessor(L, x)         O(n + m)       O(n + m)
Minimum(L)                O(n + m)       O(n + m)
Maximum(L)                O(n + m)       O(n + m)

```

- a hash table is iiften the best data structurer to maintain a dictionary  

**3.7.2 Efficient String Matching via Hashing**
- robert-karp algorithm - a linear expected time algorithm for a string matching 
- its based on hashing 
- good example of a randomized algorithm  

**3.7.3 Duplicate Detection via Hasing**
- key idea of hashing is to represent a large  object (key, string, substring) using a simple number
- the goal is a represenation of the large object by an entity that can be manipulated in constant time, such that its relitavely unlikely that the different large objects map to the same value 
- hashing has a lot of use cases
- hashing is a fundamental idea in randomized algorithms, yeilding expected time algorithms for problems  𝚯(nlogn) or  𝚯(n^2) in the worst  case

**3.8 Special Data Structures**
- these efficient, specialized data structures are important for efficient graph and geometric algorithms so one should be aware of their existence
- ***String data structures***
    - character strings are typically represented by arrays of characters, perhaps with a special character to mark the end of the string 
    - suffix trees/arrays are special data structures that preprocess strings to make pattern matching operations faster 
- ***Geometric data structures***
    - geometric data typically consists of collections of data points and regions
    - regions in the plane can be described by polygons, where the boundary of the polygon is given by a chain of line segments
    - polygons can be represented using an array of points (v1,...,vn,v1), such that (vi,vi+1) is a segment of the boundary
    - spatial data structures such as kd-trees organize points and regions by geometric location to support fast search
- ***Graph data structures*** 
    – graphs are typically represented using either adjacency matrices or adjacency lists
    - the choice of representation can have a substantial impact on the design of the resulting graph algorithms
- ***Set data structures***  
    – subsets of items are typically represented using a dictionary to support fast membership queries
    - alternately, bit vectors are boolean arrays such that the ith bit represents true if i is in the subset

### Chapter 4 Sorting and Searching
- sorting is the basic building block that many other algorithms are built around
- dozens of different sorting algorithms are known, most of which possess some particular advantage over all other algorithms in certain situations
- fundamental algos covered as important design paradigms: 
    - heapsort
    - mergesort
    - quicksort
    - distribution sort
**4.1 Applications of Sorting**
- clever sorting algorithms exist that run in O(n log n) 
- this is a huge improvement over naive O(n^2) sorting algorithms for large values of n
- an important algorithm design technique is to use sorting as a basic building block, because many other problems become easy once a set of items is sorted
- example  applications: 
    - ***searching***
        - binary search tests whetheer an item iis in a  dictionary in O(log n) time, provided the keys are all sorted
        - search processing is perhaps the single most important aplication of sortin
    - ***closest pair***
        - a linear time scan of a set of n numbers to find the pair of numbers with the smallest difference between them would be O(n log n) time including the sorting
    - ***element uniqueness***
        - can use to find duplicates in a set, by asking if there's a gap of zero between adjacent pairs
    - ***frequency distribution***
        -  using sorting, you can  findd the largest frequency of an element by sweeping from left to right and count them
    - ***selection***
        - kth largest item in an array can be found if the keys are placed in sorted order, the kth largest can be found in constant time by looking at the kth position of the array
    - ***convex hulls*** 
        - we can use sorting to construct a convex wall by sorting the points by x-coordinate and inserting the points from left to right into the hull
        - since the right most  point is always on the boundary,  we know that it  will be appear in the hull
        - adding this new right-most point may cause others to be deleted, but we can quickly identify these points because they lie inside the polygon formed by adding the new point 
        - these points will be neighbors of the previous point we inserted,  so they will be easy to find and delete
        -  total time is linear after sorting
    - **take-away**
        - sorting lies at the heart of many algos
        - sorting data is one of the first things any algo designer should try in the quest for efficiency 
        
**4.2 Pragmatics of Sorting**
- deciding what order we want items sorted will depend on the application because different applications call for different orders: 
    - ***Increasing or decreasing order***
    - ***Sorting just the key or an entire record***
    - ***What should we do with equal keys?***
        - note: sometimes it is required to leave items in the same relativee order as in the original permutation
        - sorting algos that automatically enforce this requirement are called ***stable***
        - few fast algos are stable
        - stability can be achievedd by adding the initial position as a secondary key
    - ***What about non-numerical data?***
        - alphabetizing is the sorting of text strings
        - we can make rules about the collating sequence of chars and numbers using a  comparison functionn 
        - by abstracting pairwise ordering decision to such a comparison function, we can implement sorting algorithms independent of such criteria
        - you can pass this the comparison function in as an argument to the sort procedure 
    
    **4.3 Heapsort: Fast Sorting  via Data Structures**
     - using a priority queue implementation speeds up selection sort from O(n^2) to O(nlogn)
     - heapsort is an implementation of selection sort using the right data structure

     **4.3.1 Heaps**
     - heaps are a simple and elegant data structure for effeciently supporting  the priority queue operations insert and extract-min
     - heaps work by maintaining a partial order on the set of elements which is weaker than the sorted  order (so it can be efficient to maintain) yet stronger than random order (so the minimum element can be quickly identified)
     - a heap labeled tree is defined to be a binary tree such that the key  labeling of each node dominates the key labeling of its children 
     - priority queue operations
        - insert
        - extract-min
    - in a ***min-heap***, a node dominates its children by containing a smaller key than they do
    - in a ***max-heap***, parent nodes dominate by being bigger 
    - heap allows us to represent binary trees without using any pointers
    - we will store data as an array of keys, and use the position of the keys to implicitly satisfy thee role of the pointers
    - we will store the root of the tree in the first position of the array and its left and right children in the second & third positions 
    - all internal nodes still take up space in our structure, since we most represent a full binary tree to maintain the positional mapping between points & children 
    - space efficiency demandsthat each level be packed as much as it  can be 
    - if  so, only the last level may be incomplete
    - by packing the elements of the last level, as far to the left as possible, we can  represent an n-key  tree  using exactly elements of the array

   **4.3.2 Contructing Heaps**
   - heaps can be constructed incrementally by inserting each new element into the left most open spot in the array
   - this ensures the desired  balanced shape of the heap-lababled tree, but  does not neccessariily  maintain the dominance ordering of the keys
   - new key might be less than its parent in a min-heap, or  greater than its parent in a  max-heap
   - solution is to swap any dissatisfied element with its parent
   - the old parent is now happy  because its properly dominated  
   -  the other child of the old parent is still happy because it is now dominated by a element  of even more extreme than its previous parent  
   - new element is happier but may still dominate its new parent 
   - the new key bubbles up to its proper position in the hierarchy
   - by replacing the root of the subtree by a larger one at each step, we presereve the heap order elsewhere
   - an initial heap of n elements can be constructed in O(nlogn) time through n such insertions
   
**4.3.3 Extracting the minimum**
- removing the top element leaves a hole in the array which can be filled by moving the element from the right most leaf into the first position 
- if the current root is dominant, the heap order has been resorted 
- if not, the dominant child should be swapped with the root and the problem pushed down to the next leevel
- the dissatisfied element bubbles down the heap until it  dominates all of its children, maybe becoming a  leaf node and ceasing to have any childrenn
- this percolate down operation is also  called ***heaify*** because it merges two heaps (the subtrees  below with  a new key, the original root)
- root deletion is comepleted in O(logn) time
- exchanging the max element with the last element and calling the heapify repeatedly gives an O(nlogn) sorting algorithm called **heapsort**
- Heapsort worst case - O(nlogn)
- it is  an in place sort, meaning it uses  no extra memory over the  array containing the  elements to be sorted