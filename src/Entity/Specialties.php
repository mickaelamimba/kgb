<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SpecialtiesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *          collectionOperations={"get"={
 *          "normalization_context"={"groups"={"specialties_read"}},
 *     },
 *     "post"
 *     },
 *
 *     itemOperations={
 *         "get",
 *         "put",
 *        "delete",
 *
 *     }

 * )
 * @ApiFilter(OrderFilter::class, properties={"name"})
 * @ORM\Entity(repositoryClass=SpecialtiesRepository::class)
 */
class Specialties
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *@Groups({"missions_read_operation"})
     * @Groups({"specialties_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"specialties_read"})
     *@Groups({"missions_read_operation"})
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Agents::class, mappedBy="agentSpecialties")
     *
     */
    private $agents;

    /**
     * @ORM\OneToOne(targetEntity=Missions::class, mappedBy="specialtieMission", cascade={"persist", "remove"})
     *
     */
    private $missions;

    public function __construct(){
        $this->$this->agents = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection | Agents[]
     */
    public function getAgents(): Collection
    {
        return $this->agents;
    }

    public function addAgents(Agents $agents): self
    {
        if (!$this->agents->contains($agents)) {
            $this->$agents[] = $agents;
            $agents->addAgentSpecialty($this);
        }

        return $this;
    }

    public function removeAgents(Agents $agents): self
    {
        if ($this->agents->removeElement($agents)) {
            $agents->removeAgentSpecialty($this);
        }

        return $this;
    }

    public function getMissions(): ?Missions
    {
        return $this->missions;
    }

    public function setMissions(Missions $missions): self
    {
        // set the owning side of the relation if necessary
        if ($missions->getSpecialtieMission() !== $this) {
            $missions->setSpecialtieMission($this);
        }

        $this->missions = $missions;

        return $this;
    }
}
