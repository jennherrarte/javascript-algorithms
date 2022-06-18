### Chapter 1 - Intro to Algorithm Design 

- An algorithm is a procedure to accomplish a specific task 
- An algorithm is a procedure that takes any of the possible input instances and transforms it to the desired output
- There are three desirable properties for a good algorithm: correct, efficient, easy to implement
- These goals may not be simultaneously achievable. In industrial settings, any program that seems to give good enough answers without slowing the application down is often acceptable, regardless of whether a better algorithm exists. 
- The issue of finding the best possible answer or achieving maximum efficiency usually arises in industry only after serious performance or legal troubles.
- An algorithm is specified by describing the complete set of instances it must work on and of its output after running on one of  these  instances. 

**Example**
Problem: Sorting
Input: A Sequence of n keys  a1,...,an. 
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
- Accuracy: Many questions don’t have a correct answer. For example, “Will Tommy like a pair of boots or a pair of gloves for Christmas?” A hueristic can improve accuracy in these situations
-Execution time: The primary goal of a heuristic is to provide a quick answer that’s good enough

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
- Such instances are called counter-examples, and they have 2 important properties
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
- Modeling is the art of formulating your application in terms of precisely described, well-understood problems. Proper modeling is the key to applying algorithmic de- sign techniques to real-world problems. Indeed, proper modeling can eliminate the need to design or even implement algorithms, by relating your application to what has been done before
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
- Strings – which represent sequences of characters or patterns. For example, the names of students in a class can be represented by strings. Strings are likely the object in question whenever you are dealing with “text,” “charac- ters,” “patterns,” or “labels”

- The act of modeling reduces your application to one of a small number of existing problems and structures
- Such a process is inherently constraining, and certain details might not fit easily into the given target problem 
- Also, certain problems can be modeled in several different ways, some much better than others
- Modeling is only the first step in designing an algorithm for a problem
- Be alert for how the details of your applications differ from a candidate model, but don’t be too quick to say that your problem is unique and special
- Temporarily ignoring details that don’t fit can free the mind to ask whether they really were fundamental in the first place
- Modeling your application in terms of well-defined struc- tures and algorithms is the most important single step towards a solution

**Recursiveness**
- Learning to think recursively is learning to look for big things that are made from smaller things of exactly the same type as the big thing
- Recursive descriptions of objects require both decomposition rules and basis cases, namely the specification of the smallest and simplest objects where the de-composition stops
- These basis cases are usually easily defined
- Recursive structures occur everywhere in the algorithmic world
- Each of the abstract structures described above can be thought about recursively
**Examples**
- Permutations – Delete the first element of a permutation of {1, . . . , n} things and you get a permutation of the remaining n − 1 things. Permutations are recursive objects <br>
- Subsets – Every subset of the elements {1,...,n} contains a subset of {1, . . . , n − 1} made visible by deleting element n if it is present. Subsets are recursive objects. <br>
- Trees – Delete the root of a tree and what do you get? A collection of smaller trees. Delete any leaf of a tree and what do you get? A slightly smaller tree. Trees are recursive objects. <br>
- Graphs – Delete any vertex from a graph, and you get a smaller graph. Now divide the vertices of a graph into two groups, left and right. Cut through all edges which span from left to right, and what do you get? Two smaller graphs, and a bunch of broken edges. Graphs are recursive objects <br>
- Points – Take a cloud of points, and separate them into two groups by drawing a line. Now you have two smaller clouds of points. Point sets are recursive objects. <br>
- Polygons – Inserting any internal chord between two nonadjacent vertices of a simple polygon on n vertices cuts it into two smaller polygons. Polygons are recursive objects. <br>
- Strings – Delete the first character from a string, and what do you get? A shorter string. Strings are recursive objects.

