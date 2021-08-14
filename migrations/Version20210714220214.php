<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210714220214 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE agents_specialties (agents_id INT NOT NULL, specialties_id INT NOT NULL, INDEX IDX_40329B8B709770DC (agents_id), INDEX IDX_40329B8BE3AC3692 (specialties_id), PRIMARY KEY(agents_id, specialties_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE agents_specialties ADD CONSTRAINT FK_40329B8B709770DC FOREIGN KEY (agents_id) REFERENCES agents (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE agents_specialties ADD CONSTRAINT FK_40329B8BE3AC3692 FOREIGN KEY (specialties_id) REFERENCES specialties (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE agents ADD missions_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agents ADD CONSTRAINT FK_9596AB6E17C042CF FOREIGN KEY (missions_id) REFERENCES missions (id)');
        $this->addSql('CREATE INDEX IDX_9596AB6E17C042CF ON agents (missions_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE agents_specialties');
        $this->addSql('ALTER TABLE agents DROP FOREIGN KEY FK_9596AB6E17C042CF');
        $this->addSql('DROP INDEX IDX_9596AB6E17C042CF ON agents');
        $this->addSql('ALTER TABLE agents DROP missions_id');
    }
}
