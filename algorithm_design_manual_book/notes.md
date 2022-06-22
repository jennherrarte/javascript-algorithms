### Table of Contents
1. [Intro to Algorithm Design](#Chapter-1-Intro-to-Algorithm-Design)
2. [Algorithm Analysis](#Chapter-2-Algorithm-Analysis)

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
**this represents the exact times the if statement is executed**
![](Screen Shot 2022-06-21 at 11.36.34 PM.png)

- this summation is the equivalent of 
S(n) = (n - 1) + (n - 2) + (n - 3) + . . .  2 + 1

- another way to think about it is, we are adding up n - 1 terms whose average is 
S(n) = n(n -1) / 2

- in terms of upper and lower bounds, we have n terms at most, each of which is n - 1 
- S(n) <= n(n-1) = O(N2)

**Selection Sort is Quadratic**